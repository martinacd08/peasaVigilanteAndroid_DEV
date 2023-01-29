--MySql DB Log 19/01/23

CREATE DATABASE peasa;

CREATE TABLE testing ( 
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) NOT NULL, 
  number INT NOT NULL, 
  date DATE NOT NULL, 
  time TIME NOT NULL, 
  price DECIMAL(8,2) NOT NULL, 
  active BOOLEAN NOT NULL DEFAULT TRUE, 
  number_of_users INT NOT NULL, 
  status VARCHAR(255) NOT NULL, 
  description TEXT NOT NULL
);
INSERT INTO testing (name, number, date, time, price, active, number_of_users, status, description) 
VALUES ('John', 8, '2020-01-01', '12:00:00', 20.00, 1, 5, 'Active', 'This is John'), 
       ('Mary', 10, '2020-02-01', '13:00:00', 30.00, 0, 10, 'Inactive', 'This is Mary'),
       ('Dave', 12, '2020-03-01', '14:00:00', 40.00, 1, 15, 'Active', 'This is Dave'),
       ('Jane', 14, '2020-04-01', '15:00:00', 50.00, 0, 20, 'Inactive', 'This is Jane'),
       ('Adam', 16, '2020-05-01', '16:00:00', 60.00, 1, 25, 'Active', 'This is Adam'),
       ('Sam', 18, '2020-06-01', '17:00:00', 70.00, 0, 30, 'Inactive', 'This is Sam'),
       ('Rob', 20, '2020-07-01', '18:00:00', 80.00, 1, 35, 'Active', 'This is Rob'),
       ('Lee', 22, '2020-08-01', '19:00:00', 90.00, 0, 40, 'Inactive', 'This is Lee'),
       ('Tim', 24, '2020-09-01', '20:00:00', 100.00, 1, 45, 'Active', 'This is Tim'),
       ('Jill', 26, '2020-10-01', '21:00:00', 110.00, 0, 50, 'Inactive', 'This is Jill'),
       ('Ann', 28, '2020-11-01', '22:00:00', 120.00, 1, 55, 'Active', 'This is Ann'),
       ('Mike', 30, '2020-12-01', '23:00:00', 130.00, 0, 60, 'Inactive', 'This is Mike'),
       ('Nick', 32, '2021-01-01', '00:00:00', 140.00, 1, 65, 'Active', 'This is Nick'),
       ('Kate', 34, '2021-02-01', '01:00:00', 150.00, 0, 70, 'Inactive', 'This is Kate'),
       ('Paul', 36, '2021-03-01', '02:00:00', 160.00, 1, 75, 'Active', 'This is Paul'),
       ('Sara', 38, '2021-04-01', '03:00:00', 170.00, 0, 80, 'Inactive', 'This is Sara'),
       ('Tom', 40, '2021-05-01', '04:00:00', 180.00, 1, 85, 'Active', 'This is Tom'),
       ('Liz', 42, '2021-06-01', '05:00:00', 190.00, 0, 90, 'Inactive', 'This is Liz'),
       ('Alex', 44, '2021-07-01', '06:00:00', 200.00, 1, 95, 'Active', 'This is Alex'),
       ('Jean', 46, '2021-08-01', '07:00:00', 210.00, 0, 100, 'Inactive', 'This is Jean');

