CREATE DATABASE school;

use school;

CREATE TABLE class (
	id int PRIMARY KEY auto_increment,
    class varchar(5)
);

INSERT INTO class(class) VALUES
('1A'),
('1B'),
('1C');

CREATE TABLE student (
	id int PRIMARY KEY auto_increment,
    name varchar(50),
    email varchar(50),
    birth_date date,
    class_id int,
    FOREIGN KEY (class_id) references class(id)
);

INSERT INTO student (name, email, birth_date, class_id) VALUES
('aan', 'aan@gmail.com', '2000-12-12', 1),
('bambang', 'aan@gmail.com', '2000-12-12', 2),
('charlie', 'aan@gmail.com', '2000-12-12', 1);

select *
from student join class
on student.class_id = class.id
