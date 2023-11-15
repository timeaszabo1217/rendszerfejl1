const express = require("express");
const router = express.Router();
const BookingDAO = require("../dao/booking-dao.js");
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
  let bookings = await new BookingDAO().getBookings();
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
          bookings: bookings,
        });
  }
});

router.post("/admin/appointments/update", userAuth, async (req, res) => {
  const { appointment_id, new_date } = req.body;
  const formattedNewDate = new Date(new_date).toISOString().split('T')[0];

  // Ellenőrizd, hogy az appointment_id létezik
  const existingBooking = await new BookingDAO().getOneBooking(appointment_id);

  if (!existingBooking) {
    return res.status(404).send("Az időpont nem található");
  }

  // Végrehajtsd az időpont módosítást
  await new BookingDAO().updateBooking(appointment_id, existingBooking.user_id, formattedNewDate, existingBooking.booked);

  res.redirect("/admin/appointments");
});



router.get("/admin/users", userAuth, async (req, res) => {
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
            current_role: current_role,
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
