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
    const adminData = await db.any("SELECT * FROM Admin");
    const userData = await db.any("SELECT * FROM Felhasznalo");
    const articleData = await db.any("SELECT * FROM Cikkek");
    const lessonData = await db.any("SELECT * FROM Leckek");
    const userLessonData = await db.any("SELECT * FROM FelhasznaloLeckei");
    const emailNotificationData = await db.any(
      "SELECT * FROM EmailErtesitesek"
    );
    const appointmentData = await db.any("SELECT * FROM IdopontFoglalas");

    // Fájlba írás
    const backupData = {
      adminData,
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
