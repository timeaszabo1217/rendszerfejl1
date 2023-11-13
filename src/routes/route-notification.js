const express = require("express");
const router = express.Router();
const NotificationDAO = require("../dao/notification-dao.js");
const { userAuth, jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");

router.post("/add", async (req, res) => {
  let { recipient_id } = req.body;
  let { message } = req.body;
  let { mail_date } = req.body;
  const token = req.cookies.jwt;
  var email;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      email = decodedToken.email;
    });
  }

  //   let user = await new UserDAO().getUserByEmail(email);
  //    await new DogDAO().createDog(name, age, user.id);
  await new NotificationDAO().createNotification(
    recipient_id,
    message,
    mail_date
  );
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
  let notification = await new NotificationDAO().getOneNotification(id);

  res.render("update-article", {
    model: notification,
    current_role: current_role,
  });
});

router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let { recipient_id } = req.body;
  let { message } = req.body;
  let { mail_date } = req.body;

  //    await new DogDAO().updateDog(id, name, age);
  await new NotificationDAO().updateNotification(
    id,
    recipient_id,
    message,
    mail_date
  );

  res.redirect("/");
});

router.post("/delete/:id", async (req, res) => {
  let id = req.params.id;
  await new NotificationDAO().deleteNotification(id);
  res.redirect("/");
});

module.exports = router;
