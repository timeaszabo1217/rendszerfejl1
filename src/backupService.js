const fs = require('fs');
const path = require('path');
const pgp = require('pg-promise')();

const UserDAO = require("./dao/user-dao.js");
const LessonDAO = require("./dao/lesson-dao.js");
const ArticleDAO = require("./dao/article-dao.js");
const NotificationDAO = require("./dao/notification-dao.js");
const BookingDAO = require("./dao/booking-dao");


const userDAO = new UserDAO();
const lessonDAO = new LessonDAO();
const articleDAO = new ArticleDAO();
const notificationDAO = new NotificationDAO();
const bookingDAO = new BookingDAO();


// Mentési könyvtár elérési útja
const backupDir = path.join(__dirname, 'backup');

// Ellenőrizze, hogy létezik-e a mentési könyvtár, ha nem, hozza létre
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Mentés létrehozása
async function createBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFile = path.join(backupDir, `backup-${timestamp}.json`);

  try {
    // Adatok lekérése az adatbázisból
    const userData = await userDAO.getUsers();
    const articleData = await articleDAO.getArticles();
    const lessonData = await lessonDAO.getLessons();
    const notificationData = await notificationDAO.getNotifications();
    const bookingData = await bookingDAO.getBookings();

    // Összeállítja az összes adatot egy objektumban
    const backupData = {
      userData,
      articleData,
      lessonData,
      notificationData,
      bookingData
    };

    // Az adatok JSON formátumba konvertálása
    const backupContent = JSON.stringify(backupData, null, 2);

    // Az adatok írása a megadott fájlba
    fs.writeFileSync(backupFile, backupContent);
    console.log('Backup created successfully:', backupFile);
  } catch (error) {
    console.log('Error creating backup:', error);
  }
}

createBackup();
module.exports = {
  createBackup,
};