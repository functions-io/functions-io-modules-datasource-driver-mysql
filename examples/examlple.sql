CREATE DATABASE security DEFAULT CHARACTER SET utf8 ;

CREATE TABLE security.user (
    name VARCHAR(255) NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NULL,
    PRIMARY KEY (email)
);

INSERT INTO security.user (name, email, password) VALUES ("admin","admin@admin.com","40bd001563085fc35165329ea1ff5c5ecbdbbeef");