

--ROLE INSERT--
--insert into role (id,authority) values (1,'ADMIN');
--insert into role (id,authority) values (2,'USER');


--USER INSERT--
insert into users (username,first_name,last_name,password) values ('uFirst', 'Ffirst', 'Lfirst','$2a$12$kCZzotlwmzpeMuzp/T5InuLskCpjvS6FSY4W21z0B/h4tCz/6VzL6');
insert into users (username,first_name,last_name,password) values ('uSecond', 'FSecond', 'LSecond','123');
insert into users (username,first_name,last_name,password) values ('uThird', 'FThird', 'LThird','123');


--POST INSERT--
insert into post (userID,content,tags) values (1,'Second Content','tags');
insert into post (userID,content,tags) values (1,'Third Content','tags');
insert into post (userID,content,tags) values (2,'Fourth Content','tags');