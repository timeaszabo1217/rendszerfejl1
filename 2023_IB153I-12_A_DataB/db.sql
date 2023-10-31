-- Először ellenőrizze, hogy létezik-e a "Admin" tábla
DROP TABLE IF EXISTS Admin;

-- Most hozza létre a "Admin" táblát újra
CREATE TABLE Admin (
  id serial PRIMARY KEY,
  admin_username VARCHAR(255) NOT NULL,
  admin_email VARCHAR(255) NOT NULL,
  admin_passw VARCHAR(255) NOT NULL
);


-- Először ellenőrizze, hogy létezik-e a "Felhasznalo" tábla
DROP TABLE IF EXISTS Felhasznalo;

-- Most hozza létre a "Felhasznalo" táblát újra
CREATE TABLE Felhasznalo (
  user_id serial PRIMARY KEY,
  user_username VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_passw VARCHAR(255) NOT NULL,
  aktiv_leckek VARCHAR(255)
);

-- Először ellenőrizze, hogy létezik-e a "Cikkek" tábla
DROP TABLE IF EXISTS Cikkek;

-- Most hozza létre a "Cikkek" táblát újra
CREATE TABLE Cikkek (
  cikk_id serial PRIMARY KEY,
  cikkek_neve VARCHAR(255) NOT NULL,
  cikkek_tartalma TEXT NOT NULL,
  cikk_datum TIMESTAMP NOT NULL
);


-- Először ellenőrizze, hogy létezik-e a "Leckek" tábla
DROP TABLE IF EXISTS Leckek;

-- Most hozza létre a "Leckek" táblát újra
CREATE TABLE Leckek (
  lecke_id serial PRIMARY KEY,
  lecke_neve VARCHAR(255) NOT NULL,
  lecke_tartalma TEXT NOT NULL
);


-- Először ellenőrizze, hogy létezik-e a "FelhasznaloLeckei" tábla
DROP TABLE IF EXISTS FelhasznaloLeckei;

-- Most hozza létre a "FelhasznaloLeckei" táblát újra
CREATE TABLE FelhasznaloLeckei (
  leckek_id INT,
  felhasznalo_id INT,
  PRIMARY KEY (leckek_id, felhasznalo_id),
  FOREIGN KEY (leckek_id) REFERENCES Lecke (lecke_id),
  FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo (user_id)
);


-- Először ellenőrizze, hogy létezik-e az "EmailErtesitesek" tábla
DROP TABLE IF EXISTS EmailErtesitesek;

-- Most hozza létre az "EmailErtesitesek" táblát újra
CREATE TABLE EmailErtesitesek (
  mail_id serial PRIMARY KEY,
  cimzett_id INT,
  uzenet TEXT NOT NULL,
  mail_datum TIMESTAMP NOT NULL,
  FOREIGN KEY (cimzett_id) REFERENCES Admin(admin_id)
);


-- Először ellenőrizze, hogy létezik-e az "IdopontFoglalas" tábla
DROP TABLE IF EXISTS IdopontFoglalas;

-- Most hozza létre az "IdopontFoglalas" táblát újra
CREATE TABLE IdopontFoglalas (
  idopont_id serial PRIMARY KEY,
  felhasznalo_id INT,
  pszichologus_id INT,
  foglal_datum TIMESTAMP NOT NULL,
  FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(user_id),
  FOREIGN KEY (pszichologus_id) REFERENCES Admin(admin_id)
);

