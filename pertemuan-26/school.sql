create database school;

use school;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(45),
  email varchar(45),
  birth_date date,
);

CREATE TABLE class (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(45)
);

INSERT INTO users (name, email, birth_date, ) VALUES 
('Alpha','alpha@gmail.com','2000-12-12',1),
('Beta','beta@gmail.com','2000-11-11',3),
('Charlie','chalie@gmail.com','2000-11-11',4),
('Delta','delta@gmail.com','2000-11-11',2),
('Echo','echo@gmail.com','2000-11-11',6),
('Foxtrot','foxtrot@gmail.com','2000-11-11',6);


INSERT INTO class (name) VALUES 
('1A'),
('1B'),
('1C'),