const express = require("express");
const bcrypt = require("bcryptjs");
const UserDAO = require("../dao/user-dao");
const jwt = require("jsonwebtoken");
const jwtSecret = require("./../config/auth.js");
const router = express.Router();

router.post("/loginuser", async (req, res) => {
  let { email, password, returnTo } = req.body;

  const user = await new UserDAO().getUserByEmail(email);

  if (!user) {
    res.status(400).json({
      message: "Login not successful",
    });
  } else {
    bcrypt.compare(password, user.user_passw).then(function (result) {
      if (result) {
        const token = jwt.sign(
          {
            id: user.user_id,
            username: user.user_username,
            email,
            role: user.user_role,
          },
          jwtSecret.jwtSecret
        );
        res.cookie("jwt", token, {
          httpOnly: true,
        });
        return res.redirect(returnTo || '/');
      } else {
        res.status(400).json({
          message: "Login not succesful",
        });
      }
    });
  }
});

router.get("/register", async (req, res) => {
  const token = req.cookies.jwt;
  var current_role;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      current_role = decodedToken.role;
    });
  }
  return res.render("register", {
    current_role: current_role,
  });
});

router.get("/login", async (req, res) => {
  const returnTo = req.query.returnTo || '/';
  const token = req.cookies.jwt;
  var current_role;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      current_role = decodedToken.role;
    });
  }
  return res.render("login", {
    current_role: current_role,
    returnTo: returnTo
  });
});

router.post("/registeruser", async (req, res) => {
  let { username, email, password, role } = req.body;

  try {
    const existingUser = await new UserDAO().getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        message: "A felhasználó már regisztrált ezzel az e-mail címmel.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new UserDAO().createUser(username, email, hashedPassword, role);

    if (newUser) {
      const token = jwt.sign(
        {
          id: newUser.user_id,
          username: newUser.user_username,
          email: newUser.user_email,
          role: newUser.user_role,
        },
        jwtSecret.jwtSecret
      );

      res.cookie("jwt", token, {
        httpOnly: true,
      });
      return res.redirect("/");
    } else {
      throw new Error("A regisztráció sikertelen.");
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Valami hiba történt a regisztráció közben.",
    });
  }
});

router.get("/logout", (req, res) => {
  res.cookie("jwt", "", {
    maxAge: "1",
  });
  res.redirect("/");
});

module.exports = router;
