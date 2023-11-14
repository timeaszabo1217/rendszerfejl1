const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const app = express();
const { userAuth } = require("./config/auth.js");
const routeLesson = require("./routes/route-lessons");
const routeUser = require("./routes/route-users");
const routeArticle = require("./routes/route-article");
const routeBooking = require("./routes/route-booking");
const schedule = require("node-schedule");
const backupService = require("./backupService");
const routeNotification = require("./routes/route-notification");
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(routeArticle);
app.use(routeLesson);
app.use(routeBooking);
app.use(routeUser);
app.use(routeNotification);

app.listen(PORT, () => {
  console.log("App listening at: http://localhost:8080/");
});

schedule.scheduleJob("10 3 * * *", () => {
  backupService.createBackup();
});
