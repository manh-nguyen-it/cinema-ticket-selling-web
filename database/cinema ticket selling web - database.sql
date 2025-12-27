use cinema_ticket_selling;

/*
drop table film_actor;
drop table actor;
drop table watch_later;
drop table question;
drop table rating_film;
drop table rating_cinema;
drop table news;
drop table bill_detail;
drop table bill;
drop table beverage;
drop table food;
drop table ticket;
drop table screening;
drop table cinema;
drop table branch;
drop table film;
drop table type;
drop table promotion;
drop table usr;
drop table role;
*/

create table role (
	role_id char(2),
	name varchar(5),
	constraint pk_role primary key (role_id)
);

create table usr (
	usr_id int not null auto_increment,
	usrname varchar(50),
	passwd varchar(100),
	name varchar(100),
	email varchar(100),
	role_id char(2),
	constraint pk_usr primary key (usr_id),
	constraint fk_usr_to_role foreign key (role_id) references role(role_id)
);

create table promotion (
	promotion_id int,
    name varchar(100),
    discount double,
    constraint pk_promotion primary key (promotion_id)
);

create table type (
	type_id char(3),
	name varchar(100),
	constraint pk_type primary key (type_id)
);
create table film (
	film_id char(4),
	name varchar(200),
    directors varchar(200),
	type_id char(3),
    has_caption boolean,
	period int,
    age int,
    language varchar(20),
	description text,
	trailer_video_link varchar(200),
	photo_link varchar(200),
    banner_link varchar(200),
    start date,
    rating double,
    promotion_id int,
	constraint pk_film primary key (film_id),
	constraint fk_film_to_type foreign key (type_id) references type(type_id),
    constraint fk_film_to_promotion foreign key (promotion_id) references promotion(promotion_id)
);

create table branch (
	branch_id int,
    name varchar(100),
    constraint pk_branch primary key (branch_id)
);

create table cinema (
	cinema_id char(3),
    branch_id int,
	name varchar(200),
	address varchar(500),
	introduction text,
	photo_link varchar(200),
    rating double,
	constraint pk_cinema primary key (cinema_id),
    constraint fk_cinema_to_branch foreign key (branch_id) references branch(branch_id)
);

create table screening (
	screening_id char(5),
    branch_id int,
	cinema_id char(3),
	room varchar(10),
	time_point datetime,
	film_id char(4),
	price int,
	constraint pk_screening primary key (screening_id),
	constraint fk_screening_to_cinema foreign key (cinema_id) references cinema(cinema_id),
	constraint fk_screening_to_film foreign key (film_id) references film(film_id)
);

create table seat_type (
	seat_type_id char(2),
	seat_type_name varchar(50),
	price int,
	constraint pk_seat_type primary key (seat_type_id)
);

create table ticket (
	ticket_id char(5),
	screening_id char(5),
	seat_type_id char(2),
	ticket_price int,
	constraint pk_ticket primary key (ticket_id),
	constraint fk_ticket_to_screening foreign key (screening_id) references screening(screening_id),
	constraint fk_ticket_to_seat_type foreign key (seat_type_id) references seat_type(seat_type_id)
);

create table food (
	food_id char(6),
	name varchar(200),
    description varchar(500),
	price int,
	constraint pk_food primary key (food_id)
);

create table beverage (
	beverage_id char(6),
	name varchar(200),
    description varchar(500),
	price int,
	constraint pk_food primary key (beverage_id)
);

create table bill (
	bill_id char(5),
	usr_id int,
	payment_total int,
	transact_time datetime,
	constraint pk_bill primary key (bill_id),
	constraint fk_bill_to_user foreign key (usr_id) references usr(usr_id)
);

create table bill_detail (
	bill_detail_id char(6),
	bill_id char(5),
	item_id varchar(20),
	number int,
	payment int,
	constraint pk_bill_detail primary key (bill_detail_id),
	constraint fk_bill_detail_to_bill foreign key (bill_id) references bill(bill_id)
);

create table news (
	news_id int,
    title varchar(200),
    short_info text,
    photo_link varchar(200),
    date date,
    constraint pk_news primary key (news_id)
);

create table rating_cinema (
	rating_id int,
    usr_id int,
    num_star int,
    comment varchar(500),
    date date,
    constraint pk_rating_cinema primary key (rating_id),
    constraint fk_rating_cinema_to_usr foreign key (usr_id) references usr(usr_id)
);

create table rating_film (
	rating_id int,
    usr_id int,
    num_star int,
    comment varchar(500),
    date date,
    constraint pk_rating_film primary key (rating_id),
    constraint fk_rating_film_to_usr foreign key (usr_id) references usr(usr_id)
);

create table question (
	question_id int,
    usr_id int,
    question varchar(500),
    answer varchar(500),
    faq boolean,
    constraint pk_question primary key (question_id),
	constraint fk_question_to_usr foreign key (usr_id) references usr(usr_id)
);

create table watch_later (
	usr_id int,
    film_id char(4),
    constraint pk_watch_later primary key (usr_id, film_id),
	constraint fk_watch_later_to_usr foreign key (usr_id) references usr(usr_id),
    constraint fk_watch_later_to_film foreign key (film_id) references film(film_id)
);

create table actor (
	actor_id int,
    name varchar(50),
    photo varchar(200),
    constraint pk_actor primary key (actor_id)
);

create table film_actor (
	film_id char(4),
	actor_id int,
    name varchar(50),
    photo varchar(200),
    constraint pk_actor primary key (film_id, actor_id),
    constraint fk_film_actor_to_actor foreign key (actor_id) references actor(actor_id),
    constraint fk_film_actor_to_film foreign key (film_id) references film(film_id)
);






