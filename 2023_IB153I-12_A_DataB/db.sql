-- Elosz�r ellenorizze, hogy l�tezik-e a "Admin" t�bla
DROP TABLE IF EXISTS Admin;

-- Most hozza l�tre a "Admin" t�bl�t �jra
CREATE TABLE Admin (
  admin_id serial PRIMARY KEY,
  admin_username VARCHAR(255) NOT NULL,
  admin_email VARCHAR(255) NOT NULL,
  admin_passw VARCHAR(255) NOT NULL
);


-- Elosz�r ellenorizze, hogy l�tezik-e a "Felhasznalo" t�bla
DROP TABLE IF EXISTS Felhasznalo;

-- Most hozza l�tre a "Felhasznalo" t�bl�t �jra
CREATE TABLE Felhasznalo (
  user_id serial PRIMARY KEY,
  user_username VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_passw VARCHAR(255) NOT NULL,
  aktiv_leckek VARCHAR(255)
);

-- Elosz�r ellenorizze, hogy l�tezik-e a "Cikkek" t�bla
DROP TABLE IF EXISTS Cikkek;

-- Most hozza l�tre a "Cikkek" t�bl�t �jra
CREATE TABLE Cikkek (
  cikk_id serial PRIMARY KEY,
  cikkek_neve VARCHAR(255) NOT NULL,
  cikkek_tartalma TEXT NOT NULL,
  cikk_datum TIMESTAMP NOT NULL
);


-- Elosz�r ellenorizze, hogy l�tezik-e a "Leckek" t�bla
DROP TABLE IF EXISTS Leckek;

-- Most hozza l�tre a "Leckek" t�bl�t �jra
CREATE TABLE Leckek (
  lecke_id serial PRIMARY KEY,
  lecke_neve VARCHAR(255) NOT NULL,
  lecke_tartalma TEXT NOT NULL
);


-- Elosz�r ellenorizze, hogy l�tezik-e a "FelhasznaloLeckei" t�bla
DROP TABLE IF EXISTS FelhasznaloLeckei;

-- Most hozza l�tre a "FelhasznaloLeckei" t�bl�t �jra
CREATE TABLE FelhasznaloLeckei (
  leckek_id INT,
  felhasznalo_id INT,
  PRIMARY KEY (leckek_id, felhasznalo_id),
  FOREIGN KEY (leckek_id) REFERENCES Leckek (lecke_id),
  FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo (user_id)
);


-- Elosz�r ellenorizze, hogy l�tezik-e az "EmailErtesitesek" t�bla
DROP TABLE IF EXISTS EmailErtesitesek;

-- Most hozza l�tre az "EmailErtesitesek" t�bl�t �jra
CREATE TABLE EmailErtesitesek (
  mail_id serial PRIMARY KEY,
  cimzett_id INT,
  uzenet TEXT NOT NULL,
  mail_datum TIMESTAMP NOT NULL,
  FOREIGN KEY (cimzett_id) REFERENCES Admin(admin_id)
);


-- Elosz�r ellenorizze, hogy l�tezik-e az "IdopontFoglalas" t�bla
DROP TABLE IF EXISTS IdopontFoglalas;

-- Most hozza l�tre az "IdopontFoglalas" t�bl�t �jra
CREATE TABLE IdopontFoglalas (
  idopont_id serial PRIMARY KEY,
  felhasznalo_id INT,
  pszichologus_id INT,
  foglal_datum TIMESTAMP NOT NULL,
  FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo(user_id),
  FOREIGN KEY (pszichologus_id) REFERENCES Admin(admin_id)
);

