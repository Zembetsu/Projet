use users;
CREATE TABLE users(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nom VARCHAR(50),
prenom VARCHAR(50),
naissance VARCHAR(50),
adresse VARCHAR(100),
mail VARCHAR(100),
login VARCHAR(50),
password VARCHAR(50));