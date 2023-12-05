const express = require("express");
const router = express.Router();
const { userAuth, jwtSecret } = require("../config/auth.js");
const UserDAO = require("../dao/user-dao.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.get('/error', (req, res) => {
  const errorMessage = req.query.message;
  res.status(302).render('error', { message: errorMessage });
});

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

    const token = req.cookies.jwt;

    var current_email;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
          current_email = decodedToken.email;
        });
    };
  
    const user = await new UserDAO().getUserByEmail(current_email);
  
    if (!user) {
      return res.status(302).render("error", {
        message: "Nincs ilyen felhasználó."
      });
    } else {
        var newUsername = (username === '' ? user.user_username : username);
        var newEmail = (email === '' ? user.user_email : email);

        const existingUser = await new UserDAO().getUserByEmail(newEmail);
        if (existingUser && existingUser.user_id !== user.user_id) {
            return res.status(302).render("error", {
                message: "Ez az email-cím már használatban van. Kérlek válassz egy másikat."
            });
        }

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

    if (token) {
        jwt.verify(token, jwtSecret, async (err, decodedToken) => {
        // res.send(decodedToken);
        const current_email = decodedToken.email;
        const user = await new UserDAO().getUserByEmail(current_email);
  
        if (!user) {
          return res.status(302).render("error", {
            message: "Nincs ilyen felhasználó."
          });
        } else {
            if(await bcrypt.compare(current_password, user.user_passw) && new_password === confirm_password 
            && new_password !== current_password && new_password.length >= 4){
                const hashedPassword = await bcrypt.hash(new_password, 10);
                await new UserDAO().updateUser(user.user_id, user.user_username, user.user_email, hashedPassword);
                res.status(200).redirect("/profile");
            }else {
              if(new_password !== confirm_password ) {
                return res.status(302).render("error", {
                  message: "A jelszavad megerősítése nem egyezik az új jelszóban megadottal."
                });
              }
              if(new_password === current_password) {
                return res.status(302).render("error", {
                  message: "Az új jelszavad nem lehet a jelenlegivel azonos."
                });
              }
              if(new_password.length < 4) {
                return res.status(302).render("error", {
                  message: "Az új jelszavad legalább 4 karaktert kell tartalmazzon.."
                });
              }
              return res.status(302).render("error", {
                message: "Helytelen jelszót adtál meg, próbáld újra."
              });
            }
        }
        });
    };
});

router.post("/profile/edit/delete", async (req, res) => {
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
      return res.status(302).render("error", {
        message: "Nincs ilyen felhasználó."
      });
    } else {
            await new UserDAO().deleteUser(user.user_id);
            res.redirect("/logout");
        }
    }
);

module.exports = router;
