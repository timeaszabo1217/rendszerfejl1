const express = require("express");
const router = express.Router();
const BookingDAO = require("../dao/booking-dao.js");
const UserDAO = require("../dao/user-dao.js");
const { userAuth, jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");

router.get('/error', (req, res) => {
  const errorMessage = req.query.message;
  res.render('error', { message: errorMessage });
});

router.get("/admin", userAuth, async (req, res) => {
  const token = req.cookies.jwt;

  var current_role;
  let bookings = await new BookingDAO().getBookings();
  const users = await new UserDAO().getUsers();

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      current_role = decodedToken.role;
    });
  }

  if(current_role !== 'ROLE_ADMIN'){
    return res.render("error", {
      message: "Ehhez nincs jogosultságod."
    });
  }else{
      res.render("admin", {
          current_role: current_role,
          bookings: bookings,
          users: users
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
    return res.render("error", {
      message: "Ehhez nincs jogosultságod."
    });
  }else{
      res.render("admin_appointments", {
          current_role: current_role,
          bookings: bookings,
        });
  }
});

const formatDateForPostgres = (dateString) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};

router.post("/admin/appointments", userAuth, async (req, res) => {
  const { user_id, booking_date } = req.body;
  const formattedDate = formatDateForPostgres(booking_date);
  const booked = false;
  await new BookingDAO().createBooking(user_id, formattedDate, booked);

  res.redirect("/admin/appointments");
});

router.post("/admin/appointments/delete", async (req, res) => {
  let appointment_id = req.body.appointment_id_delete;
  await new BookingDAO().deleteBooking(appointment_id);
  res.redirect("/admin/appointments");
});

router.post("/admin/appointments/update", userAuth, async (req, res) => {
  let appointment_id = req.body.appointment_id_update;
  const { user_id, booking_date, booked } = req.body;
  const formattedDate = formatDateForPostgres(booking_date);

  await new BookingDAO().updateBooking(appointment_id, user_id, formattedDate, booked);

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
    return res.render("error", {
      message: "Ehhez nincs jogosultságod."
    });
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
      return res.render("error", {
        message: "Ehhez nincs jogosultságod."
      });
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
      return res.render("error", {
        message: "Ehhez nincs jogosultságod."
      });
    }else{
        res.render("admin_lessons", {
            current_role: current_role,
          });
    }
});

module.exports = router;
