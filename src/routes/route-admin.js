const express = require("express");
const router = express.Router();
const { userAuth, jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");

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
