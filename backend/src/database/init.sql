-- Active: 1665423805265@@127.0.0.1@3306@covenant_database

DROP TABLE Proposals;
DROP TABLE Users;
DROP TABLE Departements;
DROP TABLE Roles;
DROP TABLE Segments;
DROP TABLE Concertation;
DROP TABLE Sectors;
DROP TABLE Votationphases;
CREATE TABLE Roles (
    id int NOT NULL AUTO_INCREMENT,
    roleName Varchar(255),
    roleDescription Varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE Sectors  (   
    id int NOT NULL AUTO_INCREMENT,
    name Varchar(255),
    description Varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE Departements(
    id int NOT NULL AUTO_INCREMENT,
    name Varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE Segments(
    id int NOT NULL AUTO_INCREMENT,
    name Varchar(255),
    sectorId int,
    PRIMARY KEY (id),
    FOREIGN KEY (sectorId) REFERENCES Sectors(id)
);
CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    roleId int,
    segmentId int,
    departamentId int,
    PRIMARY KEY (id),
    FOREIGN KEY(roleId) REFERENCES Roles(id),
    FOREIGN KEY(segmentId) REFERENCES Sectors(id),
    FOREIGN KEY(departamentId) REFERENCES Departements(id)
);  
CREATE TABLE VotationPhases(
    id int AUTO_INCREMENT,
    name varchar(255),
    duration int,
    PRIMARY KEY (id)
);
CREATE TABLE Concertation(
    id int AUTO_INCREMENT,
    name varchar(255),
    isOpen boolean,
    sectorId int,
    votationPhaseId int,
    apertureDate date,
    PRIMARY KEY (id),
    FOREIGN KEY(votationPhaseId) REFERENCES VotationPhases(id),
    FOREIGN KEY(sectorId) REFERENCES Sectors(id)
);
CREATE TABLE Proposals (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    description varchar(255),
    votationPhaseId int,
    userId int,
    departmentId int,
    PRIMARY KEY (id),
    FOREIGN KEY(votationPhaseId) REFERENCES VotationPhases(id),
    FOREIGN KEY(userId) REFERENCES Users(id),
    FOREIGN KEY(departmentId) REFERENCES Departements(id)
);