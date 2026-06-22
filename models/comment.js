
// models/comment.js -  creation table comment

/*

create table comments(
id serial primary key,
titre varchar(300) not null,
content text,
user_id int references (id) on delete cascade,
posts_id int references (id) on delete cascade,
created_ad timestamp default now()
)
*/