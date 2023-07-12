CREATE DATABASE ng_easyMedia_db;

USE  ng_easyMedia_db;

CREATE TABLE state(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    message VARCHAR(300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author VARCHAR(100),
    description VARCHAR(250)
);

CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

DESCRIBE state;

DESCRIBE user;