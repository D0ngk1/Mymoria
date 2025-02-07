


create table if not exists role (
    id        INT PRIMARY KEY,
    authority VARCHAR(25)
);

create table if not exists users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(25),
    first_name  VARCHAR(25),
    last_name   VARCHAR(25),
    password    VARCHAR(25)
);
create table if not exists post (
    id      SERIAL PRIMARY KEY,
    userID  INT not null,
    content VARCHAR(25),
    tags    VARCHAR(25),
    CONSTRAINT FK_USER FOREIGN KEY(userID) references USERS(id) on delete cascade
);

create table if not exists user_role (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) on delete cascade,
    FOREIGN KEY (role_id) REFERENCES role(id) on delete cascade
);