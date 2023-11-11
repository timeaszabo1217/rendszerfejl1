-- First, check if the "Users" table exists
DROP TABLE IF EXISTS Users;

-- Now, create the "Users" table again
CREATE TABLE Users (
  user_id serial PRIMARY KEY,
  user_username VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_passw VARCHAR(255) NOT NULL,
  user_role VARCHAR(255) NOT NULL
);

-- First, check if the "Articles" table exists
DROP TABLE IF EXISTS Articles;

-- Now, create the "Articles" table again
CREATE TABLE Articles (
  article_id serial PRIMARY KEY,
  article_name VARCHAR(255) NOT NULL,
  article_content TEXT NOT NULL,
  article_date TIMESTAMP NOT NULL
);

-- First, check if the "Lessons" table exists
DROP TABLE IF EXISTS Lessons;

-- Now, create the "Lessons" table again
CREATE TABLE Lessons (
  lesson_id serial PRIMARY KEY,
  lesson_name VARCHAR(255) NOT NULL,
  lesson_content TEXT NOT NULL
);

-- First, check if the "UserLessons" table exists
DROP TABLE IF EXISTS UserLessons;

-- Now, create the "UserLessons" table again
CREATE TABLE UserLessons (
  lesson_id INT,
  user_id INT,
  PRIMARY KEY (lesson_id, user_id),
  FOREIGN KEY (lesson_id) REFERENCES Lessons (lesson_id),
  FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

-- First, check if the "EmailNotifications" table exists
DROP TABLE IF EXISTS EmailNotifications;

-- Now, create the "EmailNotifications" table again
CREATE TABLE EmailNotifications (
  mail_id serial PRIMARY KEY,
  recipient_id INT,
  message TEXT NOT NULL,
  mail_date TIMESTAMP NOT NULL,
  FOREIGN KEY (recipient_id) REFERENCES Users(user_id)
);

-- First, check if the "AppointmentBookings" table exists
DROP TABLE IF EXISTS AppointmentBookings;

-- Now, create the "AppointmentBookings" table again
CREATE TABLE AppointmentBookings (
  appointment_id serial PRIMARY KEY,
  user_id INT,
  booking_date TIMESTAMP NOT NULL,
  booked BOOLEAN,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);