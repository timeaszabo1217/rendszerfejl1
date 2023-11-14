const express = require("express");
const router = express.Router();
const { userAuth, jwtSecret } = require("../config/auth.js");
const UserDAO = require("../dao/user-dao.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


router.get("/profile", userAuth, async (req, res) => {
  const token = req.cookies.jwt;

  var current_role;
  var current_email;
  var current_username;
  var current_role;
  var current_userid;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
        // res.send(decodedToken);
        current_email = decodedToken.email;
        current_role = decodedToken.role;
        current_username = decodedToken.username;
    });
  }
  res.render("profile", {
    current_role: current_role,
    current_email: current_email,
    current_username: current_username,
  });
});

router.post("/profile/edit/data", async (req, res) => {
    let { email, username } = req.body;

    // res.send(req.body);

    const token = req.cookies.jwt;

    var current_email;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
        // res.send(decodedToken);
        current_email = decodedToken.email;
        });
    };
  
    const user = await new UserDAO().getUserByEmail(current_email);
  
    if (!user) {
      res.status(400).json({
        message: "No such user",
      });
    } else {
        var newUsername = (username === '' ? user.user_username : username);
        var newEmail = (email === '' ? user.user_email : email);
        const updatedUser = await new UserDAO().updateUser(user.user_id, newUsername, newEmail, user.user_passw);
        const token = jwt.sign(
            {
              id: user.user_id,
              username: updatedUser.user_username,
              email: updatedUser.user_email,
              role: user.user_role,
            },
            jwtSecret
        );
        res.cookie("jwt", token, {
        httpOnly: true,
        });
        res.redirect("/profile");
    }
});

router.post("/profile/edit/password", async (req, res) => {
    let { current_password, new_password, confirm_password } = req.body;

    // res.send(req.body);

    const token = req.cookies.jwt;

    var current_email;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
        // res.send(decodedToken);
        current_email = decodedToken.email;
        });
    };
  
    const user = await new UserDAO().getUserByEmail(current_email);
  
    if (!user) {
      res.status(400).json({
        message: "No such user",
      });
    } else {
        if(bcrypt.compare(current_password, user.user_passw) && new_password === confirm_password){
            const hashedPassword = await bcrypt.hash(new_password, 10);
            await new UserDAO().updateUser(user.user_id, user.user_username, user.user_email, hashedPassword);
            res.redirect("/profile");
        }else res.send("Incorrect passwords!");
    }
});

router.get("/admin", userAuth, async (req, res) => {
    const token = req.cookies.jwt;
  
    var current_role;

    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        current_role = decodedToken.role;
      });
    }

    if(current_role !== 'ROLE_ADMIN'){
        res.send("You're not an admin!")
    }else{
        res.render("admin", {
            current_role: current_role,
          });
    }
});

module.exports = router;
