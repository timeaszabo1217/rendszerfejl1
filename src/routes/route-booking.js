const express = require("express");
const BookingDAO = require("../dao/booking-dao");
const jwt = require("jsonwebtoken");
const jwtSecret = require("./../config/auth.js");
const router = express.Router();

router.get("/booking",userAuth, async (req, res) => {
  let bookings = await new BookingDAO().getBookings();
  res.render("booking", { bookings: bookings });
});

router.post("/add", userAuth, async (req, res) => {
  let { user_id } = req.body;
  let { booking_date } = req.body;
  let { booked } = req.body;
  const token = req.cookies.jwt;
  var email;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      email = decodedToken.email;
    });
  }

  //   let user = await new UserDAO().getUserByEmail(email);
  //    await new DogDAO().createDog(name, age, user.id);
  await new BookingDAO().createBooking(user_id, booking_date, booked);
  return res.redirect("/");
});

router.get("/edit/:id", userAuth, async (req, res) => {
  const token = req.cookies.jwt;
  let id = req.params.id;

  var current_role;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      current_role = decodedToken.role;
    });
  }
  //   let dog = await new DogDAO().getOneDog(id);
  let booking = await new BookingDAO().getOneBooking(id);

  res.render("update-article", {
    model: booking,
    current_role: current_role,
  });
});

router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let { user_id } = req.body;
  let { booking_date } = req.body;
  let { booked } = req.body;

  //    await new DogDAO().updateDog(id, name, age);
  await new BookingDAO().updateBooking(id, user_id, booking_date, booked);

  res.redirect("/");
});

router.post("/delete/:id", async (req, res) => {
  let id = req.params.id;
  await new BookingDAO().deleteBooking(id);
  res.redirect("/");
});

module.exports = router;
