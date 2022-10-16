-- Active: 1665423805265@@127.0.0.1@3306@covenant_database
DROP TABLE Proposals;
DROP TABLE Users;
DROP TABLE Departments;
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
CREATE TABLE Departments(
    id int NOT NULL AUTO_INCREMENT,
    name Varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE Segments(
    id int NOT NULL AUTO_INCREMENT,
    segmentName Varchar(255),
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
    departmentId int,
    PRIMARY KEY (id),
    FOREIGN KEY(roleId) REFERENCES Roles(id),
    FOREIGN KEY(segmentId) REFERENCES Segments(id),
    FOREIGN KEY(departmentId) REFERENCES Departments(id)
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
    FOREIGN KEY(departmentId) REFERENCES Departments(id)
);

INSERT INTO Roles (roleName, roleDescription) VALUES ('Administrator', 'Administrador del sistema');
INSERT INTO Roles (roleName, roleDescription) VALUES ('Actor', 'Gestor del sistema');
INSERT INTO Roles (roleName, roleDescription) VALUES ('DNP', 'Departamento Nacional de Planeación');
INSERT INTO Roles (roleName, roleDescription) VALUES ('Expert', 'Experto');

INSERT INTO Sectors (name, description) VALUES ('Economía', 'Sector económico');
INSERT INTO Sectors (name, description) VALUES ('Educación', 'Sector educativo');
INSERT INTO Sectors (name, description) VALUES ('Salud', 'Sector de salud');
INSERT INTO Sectors (name, description) VALUES ('Seguridad', 'Sector de seguridad');
INSERT INTO Sectors (name, description) VALUES ('Ambiente', 'Sector de ambiente');
INSERT INTO Sectors (name, description) VALUES ('Infraestructura', 'Sector de infraestructura');
INSERT INTO Sectors (name, description) VALUES ('Transporte', 'Sector de transporte');
INSERT INTO Sectors (name, description) VALUES ('Cultura', 'Sector de cultura');
INSERT INTO Sectors (name, description) VALUES ('Deporte', 'Sector de deporte');
INSERT INTO Sectors (name, description) VALUES ('Ciencia y Tecnología', 'Sector de ciencia y tecnología');
INSERT INTO Sectors (name, description) VALUES ('Comunicaciones', 'Sector de comunicaciones');
INSERT INTO Sectors (name, description) VALUES ('Turismo', 'Sector de turismo');
INSERT INTO Sectors (name, description) VALUES ('Experto', 'Sector de expertos');

INSERT INTO Departments (name) VALUES ('Antioquia');
INSERT INTO Departments (name) VALUES ('Atlántico');
INSERT INTO Departments (name) VALUES ('Bogotá');
INSERT INTO Departments (name) VALUES ('Bolívar');
INSERT INTO Departments (name) VALUES ('Boyacá');
INSERT INTO Departments (name) VALUES ('Caldas');
INSERT INTO Departments (name) VALUES ('Caquetá');
INSERT INTO Departments (name) VALUES ('Casanare');
INSERT INTO Departments (name) VALUES ('Cauca');
INSERT INTO Departments (name) VALUES ('Cesar');
INSERT INTO Departments (name) VALUES ('Chocó');
INSERT INTO Departments (name) VALUES ('Córdoba');
INSERT INTO Departments (name) VALUES ('Cundinamarca');
INSERT INTO Departments (name) VALUES ('Guainía');
INSERT INTO Departments (name) VALUES ('Guaviare');
INSERT INTO Departments (name) VALUES ('Huila');
INSERT INTO Departments (name) VALUES ('La Guajira');
INSERT INTO Departments (name) VALUES ('Magdalena');
INSERT INTO Departments (name) VALUES ('Meta');

INSERT INTO VotationPhases (name, duration) VALUES ('Recoleccion', 15);
INSERT INTO VotationPhases (name, duration) VALUES ('Seleccion Departamental', 10);
INSERT INTO VotationPhases (name, duration) VALUES ('Seleccion Por Segmento', 7);
INSERT INTO VotationPhases (name, duration) VALUES ('Seleccion de Final', 3);

INSERT INTO Segments (segmentName, sectorId) VALUES ('Colegio', 2);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Universidad', 2);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Instituto Tecnológico', 2);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Instituto de Formación Técnica', 2);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Hospital', 3);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Clínica', 3);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Centro de Salud', 3);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Centro de Atención Primaria', 3);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Policía', 4);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Ejército', 4);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Bomberos', 4);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Guardia Nacional', 4);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Parque Nacional', 5);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Reserva Natural', 5);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Reserva Forestal', 5);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Reserva de Fauna', 5);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Planeacion vial', 6);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Planeacion urbana', 6);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Aeropuerto', 7);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Puerto', 7);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Terminal de transporte', 7);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Museo', 8);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Teatro', 8);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Cine', 8);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Biblioteca', 8);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Estadio', 9);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Piscina', 9);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Gimnasio', 9);

INSERT INTO Segments (segmentName, sectorId) VALUES ('Centro de investigación', 10);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Centro de desarrollo tecnológico', 10);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Centro de desarrollo científico', 10);

INSERT INTO Segments (segmentName, sectorId) VALUES ('Televisión', 11);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Radio', 11);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Prensa', 11);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Hotel', 12);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Hostal', 12);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Empresa Privada', 1);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Institución', 1);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Organización', 1);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Comercio', 1);
INSERT INTO Segments (segmentName, sectorId) VALUES ('Experto', 13);

INSERT INTO Users (name, email, password, roleId, segmentId, departmentId) VALUES ('Juan Garcia', 'juan@abc.com', '123', 1, null, null);
INSERT INTO Users (name, email, password, roleId, segmentId, departmentId) VALUES ('Maria Perez', 'maria@abc.com','123', 4,  41, 9);
INSERT INTO Users (name, email, password, roleId, segmentId, departmentId) VALUES ('Pedro Lopez', 'pedro@abc.com','123', 4, 41,6);
INSERT INTO Users (name, email, password, roleId, segmentId, departmentId) VALUES ('DNP', 'dnp@abc.gov.co','123', 3, null, null);
INSERT INTO Users (name, email, password, roleId, segmentId, departmentId) VALUES ('Pepita Perez', 'pepita@abc.com','123', 2, 3, 4);
