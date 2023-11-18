const express = require("express");
const BookingDAO = require("../dao/booking-dao");
const jwt = require("jsonwebtoken");
const { userAuth, jwtSecret } = require("../config/auth.js");
const router = express.Router();

router.get("/booking", userAuth, async (req, res) => {

  let bk = await new BookingDAO().getBookings();
  let booked = [];
  let user_id;
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      user_id = decodedToken.id;
    });
  }

  for (let index = 0; index < bk.length; index++) {
    if(bk[index].user_id == user_id){
      booked.push(bk[index]);
    }
  }


  let bookings = await new BookingDAO().getBookings();

  res.render("booking", { bookings: bookings, booked: booked });
});

router.post("/submitbooking", async (req, res) => {
  let { appointment_id } = req.body;

  const token = req.cookies.jwt;

  var user_id;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      user_id = decodedToken.id;
    });
  }

  let booking = await new BookingDAO().getOneBooking(appointment_id);

  await new BookingDAO().updateBooking(appointment_id, user_id, booking.booking_date, true);

  res.redirect("/booking");
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
