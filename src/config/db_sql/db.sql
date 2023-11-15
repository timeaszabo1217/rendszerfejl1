DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  user_id serial PRIMARY KEY,
  user_username VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_passw VARCHAR(255) NOT NULL,
  user_role VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS Articles;

CREATE TABLE Articles (
  article_id serial PRIMARY KEY,
  article_name VARCHAR(255) NOT NULL,
  article_content TEXT NOT NULL,
  article_date TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS Lessons;

CREATE TABLE Lessons (
  lesson_id serial PRIMARY KEY,
  lesson_name VARCHAR(255) NOT NULL,
  lesson_content TEXT NOT NULL
);

DROP TABLE IF EXISTS UserLessons;

CREATE TABLE UserLessons (
  lesson_id INT,
  user_id INT,
  PRIMARY KEY (lesson_id, user_id),
  FOREIGN KEY (lesson_id) REFERENCES Lessons (lesson_id),
  FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

DROP TABLE IF EXISTS EmailNotifications;

CREATE TABLE EmailNotifications (
  mail_id serial PRIMARY KEY,
  recipient_id INT,
  message TEXT NOT NULL,
  mail_date TIMESTAMP NOT NULL,
  FOREIGN KEY (recipient_id) REFERENCES Users(user_id)
);

DROP TABLE IF EXISTS AppointmentBookings;

CREATE TABLE AppointmentBookings (
  appointment_id serial PRIMARY KEY,
  user_id INT,
  booking_date DATE NOT NULL,
  booked BOOLEAN,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


  INSERT INTO Users
    (user_username, user_email, user_passw, user_role)
  VALUES
    ('john_doe', 'john.doe@example.com', 'johns_password', 'ROLE_ADMIN'),
    ('alice_smith', 'alice.smith@example.com', 'alices_password', 'ROLE_USER'),
    ('bob_jones', 'bob.jones@example.com', 'bobs_password', 'ROLE_ADMIN'),
    ('emily_white', 'emily.white@example.com', 'emilys_password', 'ROLE_USER'),
    ('charlie_brown', 'charlie.brown@example.com', 'charlies_password', 'ROLE_ADMIN'),
    ('olivia_green', 'olivia.green@example.com', 'olivias_password', 'ROLE_USER'),
    ('david_martin', 'david.martin@example.com', 'davids_password', 'ROLE_ADMIN'),
    ('lily_adams', 'lily.adams@example.com', 'lilys_password', 'ROLE_USER'),
    ('samuel_wilson', 'samuel.wilson@example.com', 'samuels_password', 'ROLE_ADMIN'),
    ('sophia_jackson', 'sophia.jackson@example.com', 'sophias_password', 'ROLE_USER');

  INSERT INTO Articles
    (article_name, article_content, article_date)
  VALUES
    ('Az Élet Szépségei', 'Fedezd fel az élet szépségeit és élvezd minden pillanat varázsát.', '2023-01-15'),
    ('Az Önismeret Útjai', 'Merülj el az önismeret útvesztőiben és találd meg önmagadat a belső utazás során.', '2023-02-20'),
    ('Az Évszakok Varázsa', 'Érezd meg az évszakok változásainak szépségét és harmóniáját.', '2023-03-25'),
    ('A Kreativitás Forrásai', 'Fedezd fel a kreativitás forrásait és inspirálódj az alkotás öröméből.', '2023-04-10'),
    ('A Boldogság Titka', 'Ismerd meg a boldogság titkait és teremts egy kiegyensúlyozottabb életet.', '2023-05-05'),
    ('Az Életrevalóság Bája', 'Tapasztald meg az életrevalóság báját és hozz létre élményeket, amelyek örökké fennmaradnak.', '2023-06-12'),
    ('A Célkitűzések Teljesítése', 'Tanuld meg a célok kitűzésének és elérésének kulcsait a sikeres életért.', '2023-07-18'),
    ('A Harmónia Élvezete', 'Mélyülj el a belső harmónia megtalálásában és élvezd az egyensúly áldásait.', '2023-08-22'),
    ('Az Elfogadás Művészete', 'Ismerd fel az elfogadás művészetét és építs szorosabb kapcsolatokat az emberekkel.', '2023-09-30'),
    ('A Siker Lépései', 'Ismerd meg a siker lépéseit és hozd ki a legtöbbet az életedből.', '2023-10-05');

  INSERT INTO Lessons
    (lesson_name, lesson_content)
  VALUES
    ('Bevezetés az Informatikába', 'Az informatika alapjai és az informatikai rendszerek működése.'),
    ('Matematikai Alapok', 'Alapvető matematikai fogalmak és azok alkalmazása a mindennapi életben.'),
    ('Kreatív Írástechnikák', 'Technikák és gyakorlatok a kreatív írás fejlesztéséhez.'),
    ('Fotózás Mesterfokon', 'A fotózás mestersége és a fényképezés fortélyai.'),
    ('A Tudományos Kutatás Módszertana', 'Hogyan tervezd és végezd el hatékonyan a tudományos kutatást.'),
    ('Angol Nyelvtanulás Könnyedén', 'Tippek és trükkök az angol nyelv hatékony tanulásához.'),
    ('Az Egészséges Életmód Alapjai', 'Az egészséges táplálkozás, testmozgás és mentális egészség fontossága.'),
    ('Webfejlesztés alapjai', 'A webfejlesztés alapelvei és az első lépések a webes alkalmazások készítéséhez.');

  INSERT INTO UserLessons
    (lesson_id, user_id)
VALUES
    (4, 2),
    (5, 3),
    (6, 3),
    (7, 4),
    (8, 5);


INSERT INTO EmailNotifications (recipient_id, message, mail_date)
VALUES
    (2, 'Köszönjük, hogy csatlakoztál hozzánk! Reméljük, hogy élvezni fogod a tartalmakat és tanfolyamainkat.', '2023-01-15'),
    (3, 'Fontos tájékoztatás: Készítsd elő magad az előző kurzusok anyagaival, hogy sikeres legyél az elkövetkező tanfolyamon.', '2023-02-20'),
    (4, 'Értesítés: Új tartalom érhető el! Tekintsd meg az új cikkeket és tanfolyamokat a profilodban.', '2023-03-25'),
    (5, 'Üzenet a mentorunktól: Gratulálunk az eddigi eredményeidhez! Ha kérdésed van, ne habozz feltenni nekünk.', '2023-04-10'),
    (6, 'Emlékeztető: Július 1-jén kezdődik az új tanév. Kérjük, ellenőrizd az órarended és készülj fel a kezdésre.', '2023-05-05'),
    (7, 'Közlemény a fejlesztőinktől: Frissítettük a platformot. Ismerd meg az újdonságokat és észrevételeidet várjuk!', '2023-06-12'),
    (8, 'Kiemelt esemény: Csatlakozz a következő élő online eseményünkhöz. Regisztrálj most és ne maradj le!', '2023-07-18');

INSERT INTO AppointmentBookings (user_id, booking_date, booked)
VALUES
    (2, '2023-01-04', TRUE),
    (3, '2023-01-05', FALSE),
    (4, '2023-01-06', TRUE),
    (5, '2023-01-07', TRUE),
    (6, '2023-01-08', FALSE),
    (7, '2023-01-09', TRUE),
    (8, '2023-01-10', FALSE);



