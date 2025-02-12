
DROP TABLE IF EXISTS post cascade;
DROP TABLE IF EXISTS user_role cascade;
DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS role cascade;



create table if not exists role (
    id        INT PRIMARY KEY,
    authority VARCHAR(25) unique
);

create table if not exists users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(25) unique,
    first_name  VARCHAR(25),
    last_name   VARCHAR(25),
    password    VARCHAR(250) NOT NULL
);
create table if not exists post (
    id      SERIAL PRIMARY KEY,
    userID  INT not null,
    content VARCHAR(25),
    tags    VARCHAR(25),
    CONSTRAINT FK_USER FOREIGN KEY(userID) references USERS(id) on delete cascade
);

create table if not exists user_role (
    username VARCHAR(25),
    role VARCHAR(25),
    PRIMARY KEY (username, role),
    FOREIGN KEY (username) REFERENCES users(username) on delete cascade,
    FOREIGN KEY (role) REFERENCES role(authority) on delete cascade
);