const express = require("express");
const router = express.Router();
const { userAuth, jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");


router.get("/profile", userAuth, async (req, res) => {
  const token = req.cookies.jwt;
  let id = req.params.id;

  var current_role;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      current_role = decodedToken.role;
    });
  }
  res.render("profile", {
    current_role: current_role,
  });
});

module.exports = router;
