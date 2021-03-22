CREATE DATABASE cashier;

use cashier;

CREATE TABLE user (
	id int PRIMARY KEY auto_increment,
    nama varchar(50),
    alamat varchar(250),
    kode_pos varchar(10)
);

INSERT INTO user(nama, alamat, kode_pos) VALUES
('Alpha', 'depok', '14045');