const fs = require("fs");
const path = require("path");
const pgp = require("pg-promise")();

// Kapcsolódás az adatbázishoz
const db = pgp("postgres://postgres:1234@localhost:5432/postgres");

// Mentési könyvtár elérési útja
const backupDir = path.join(__dirname, "backup");

// Ellenőrizze, hogy létezik-e a mentési könyvtár, ha nem, hozza létre
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Mentés létrehozása az adatbázisból
async function createBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupFile = path.join(backupDir, `backup-${timestamp}.json`);

  try {
    // Adatok lekérése az adatbázisból
    const userData = await db.any('SELECT * FROM Users');
    const articleData = await db.any('SELECT * FROM Articles');
    const lessonData = await db.any('SELECT * FROM Lessons');
    const userLessonData = await db.any('SELECT * FROM UserLessons');
    const emailNotificationData = await db.any('SELECT * FROM EmailNotifications');
    const appointmentData = await db.any('SELECT * FROM AppointmentBookings');

    // Fájlba írás
    const backupData = {
      userData,
      articleData,
      lessonData,
      userLessonData,
      emailNotificationData,
      appointmentData,
    };

    const backupContent = JSON.stringify(backupData, null, 2);
    fs.writeFileSync(backupFile, backupContent);

    console.log("Backup created successfully:", backupFile);
  } catch (error) {
    console.error("Error creating backup:", error);
  }
}

module.exports = {
  createBackup,
};
