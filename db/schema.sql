CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  -- TABLE CODE TO GO HERE
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(128) NOT NULL,
  devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);