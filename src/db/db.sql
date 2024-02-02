CREATE DATABASE "exam4";

-- THIS IS FOR USER TABLE

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    accessToken VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, accessToken) VALUES ('Ismoil', '1234', 'token');

--  THIS IS FOR COMPANY TABLE

CREATE TABLE companies (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL
);

INSERT INTO companies (name) VALUES ('Toshkent city');
INSERT INTO companies (name) VALUES ('Olmazor city');
INSERT INTO companies (name) VALUES ('Namangan city');


CREATE TABLE branches (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL,
    company_id INTEGER NOT NULL,
    FOREIGN KEY (company_id) REFERENCES companies(id) 
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);


INSERT INTO branches (name, company_id) VALUES ('Toshkent City Main', 1);
INSERT INTO branches (name, company_id) VALUES ('Toshkent City Shayhontohur', 1);
INSERT INTO branches (name, company_id) VALUES ('Olmazor City Mirobod', 2);
INSERT INTO branches (name, company_id) VALUES ('Namangan City Turakurgan', 3);


select c.name, b.name from companies c inner join branches b on b.company_id = c.id;

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    price_per_meter VARCHAR NOT NULL,
    meter_count INTEGER NOT NULL,
    location VARCHAR NOT NULL,
    branch_id INTEGER NOT NULL,
    FOREIGN KEY (branch_id) REFERENCES branches(id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

INSERT INTO rooms (name, price_per_meter, meter_count, location, branch_id) 
VALUES
    ('4 xonali', '1000', 130, 'Yunusobod', 1),
    ('3 xonali', '1000', 100, 'Yunusobod', 1),
    ('2 xonali', '1000', 70, 'Yunusobod', 1),
    ('4 xonali', '1000', 110, 'Shayhontohur', 2),
    ('3 xonali', '1000', 65, 'Shayhontohur', 2),
    ('2 xonali', '1000', 50, 'Shayhontohur', 2),
    ('4 xonali', '1000', 90, 'Mirobod', 3),
    ('3 xonali', '1000', 60, 'Mirobod', 3),
    ('2 xonali', '1000', 40, 'Mirobod', 3),
    ('4 xonali', '1000', 100, 'Turakurgan', 4),
    ('3 xonali', '1000', 70, 'Turakurgan', 4),
    ('2 xonali', '1000', 50, 'Turakurgan', 4);



SELECT 
    c.name AS company_name,
    b.name AS branch_name,
    r.name AS room_type,
    r.location AS location,
    r.price_per_meter AS price_per_meter,
    r.meter_count AS meter_count
FROM
    rooms r
INNER JOIN
    branches b ON b.id = r.branch_id
INNER JOIN
    companies c ON c.id = b.company_id;


-- THIS IS FOR BANK TABLE

CREATE TABLE banks (
    id SERIAL PRIMARY KEY NOT NULL,
    bank VARCHAR(255) NOT NULL,
    rent INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    starting_payment VARCHAR NOT NULL,
    service INTEGER NOT NULL
);

INSERT INTO banks (bank, rent, duration, starting_payment, service) 
VALUES 
    ('Ipoteka bank', 100000, 5, '10%', 500),
    ('Ipoteka bank', 130000, 10, '9%', 1000),
    ('Ipoteka bank', 70000, 15, '15%', 400),
    ('Xalq bank', 85000, 5, '5%', 400),
    ('Xalq bank', 120000, 10, '10%', 800),
    ('Xalq bank', 60000, 15, '15%', 300),
    ('Aloqa bank', 90000, 5, '5%', 500),
    ('Aloqa bank', 130000, 10, '10%', 1000),
    ('Aloqa bank', 70000, 15, '15%', 400),
    ('Hamkor bank', 100000, 5, '5%', 500),
    ('Hamkor bank', 140000, 10, '10%', 1000),
    ('Hamkor bank', 80000, 15, '15%', 400),
    ('Kapital bank', 110000, 5, '5%', 500),
    ('Kapital bank', 150000, 10, '10%', 1000),
    ('Kapital bank', 90000, 15, '15%', 400);

   
    



    
