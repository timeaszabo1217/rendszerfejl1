const express = require("express");
const router = express.Router();
const BookingDAO = require("../dao/booking-dao.js");
const UserDAO = require("../dao/user-dao.js");
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

router.get("/admin/appointments", userAuth, async (req, res) => {
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
      res.render("admin_appointments", {
          current_role: current_role,
        });
  }
});

router.post("/admin/appointments", userAuth, async (req, res) => {
  const { user_id, booking_date } = req.body;
  const formattedDate = booking_date ? new Date(booking_date).toISOString().split('T')[0] : null;
  const booked = false;
  
  await new BookingDAO().createBooking(user_id, formattedDate, booked);

  res.redirect("/admin/appointments");
});

router.get("/admin/users/delete/:id", userAuth, async (req, res) => {

  let users = await new UserDAO().getUsers();
  const id = req.params.id;
  // res.send(id);
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
    await new UserDAO().deleteUser(id);
    res.redirect("/admin/users");
  }
});

router.get("/admin/users", userAuth, async (req, res) => {

    let users = await new UserDAO().getUsers();
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
        res.render("admin_users", {
            current_role: current_role, users: users
          });
    }
});

router.get("/admin/lessons", userAuth, async (req, res) => {
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
        res.render("admin_lessons", {
            current_role: current_role,
          });
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
