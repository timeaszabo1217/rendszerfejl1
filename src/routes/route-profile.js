const express = require("express");
const router = express.Router();
const { userAuth, jwtSecret } = require("../config/auth.js");
const UserDAO = require("../dao/user-dao.js");
const jwt = require("jsonwebtoken");


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
