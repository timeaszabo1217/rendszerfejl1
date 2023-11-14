const express = require("express");
const router = express.Router();
const LessonDAO = require("../dao/lesson-dao.js");
const UserDAO = require("../dao/user-dao.js");
const { userAuth, jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");

router.get("/lessons", userAuth, async (req, res) => {
  let lessons = await new LessonDAO().getLessons();
  res.render("lessons", { lessons: lessons });
});

router.get("/", async (req, res) => {
  let lessons = await new LessonDAO().getLessons();
  var user_mails = [];
  const token = req.cookies.jwt;
  var current_email;
  var current_role;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      current_email = decodedToken.email;
      current_role = decodedToken.role;
    });
  }

  return res.render("index", {
    lessons: lessons,
    user_mails: user_mails,
    current_email: current_email,
    current_role: current_role,
  });
});

router.post("/add", async (req, res) => {
  let { lecke_neve } = req.body;
  let { lecke_tartalma } = req.body;
  const token = req.cookies.jwt;
  var email;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      email = decodedToken.email;
    });
  }

  //   let user = await new UserDAO().getUserByEmail(email);
  //    await new DogDAO().createDog(name, age, user.id);
  await new LessonDAO().createLesson(lecke_neve, lecke_tartalma);
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
  let lesson = await new LessonDAO().getOneLesson(id);

  res.render("update-lesson", {
    model: lesson,
    current_role: current_role,
  });
});

router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let { lecke_neve } = req.body;
  let { lecke_tartalma } = req.body;

  //    await new DogDAO().updateDog(id, name, age);
  await new LessonDAO().updateLesson(id, lecke_neve, lecke_tartalma);

  res.redirect("/");
});

router.post("/delete/:id", async (req, res) => {
  let id = req.params.id;
  await new LessonDAO().deleteLesson(id);
  res.redirect("/");
});

module.exports = router;
