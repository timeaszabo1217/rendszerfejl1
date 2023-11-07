const express = require("express");
const router = express.Router();
const ArticleDAO = require("../dao/article-dao.js");
const { userAuth, jwtSecret } = require("../config/auth.js");
const jwt = require("jsonwebtoken");

router.post("/add", async (req, res) => {
  let { article_name } = req.body;
  let { article_content } = req.body;
  let { article_date } = req.body;
  const token = req.cookies.jwt;
  var email;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      email = decodedToken.email;
    });
  }

  //   let user = await new UserDAO().getUserByEmail(email);
  //    await new DogDAO().createDog(name, age, user.id);
  await new ArticleDAO().createArticle(
    article_name,
    article_content,
    article_date
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
  let article = await new ArticleDAO().getOneArticle(id);

  res.render("update-article", {
    model: article,
    current_role: current_role,
  });
});

router.post("/update/:id", async (req, res) => {
  let id = req.params.id;
  let { article_name } = req.body;
  let { article_content } = req.body;
  let { article_date } = req.body;

  //    await new DogDAO().updateDog(id, name, age);
  await new ArticleDAO().updateArticle(
    id,
    article_name,
    article_content,
    article_date
  );

  res.redirect("/");
});

router.post("/delete/:id", async (req, res) => {
  let id = req.params.id;
  await new ArticleDAO().deleteArticle(id);
  res.redirect("/");
});

module.exports = router;
