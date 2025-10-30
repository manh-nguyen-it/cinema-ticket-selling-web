create table role (
	role_id char(2),
	name varchar(5),
	constraint pk_role primary key (role_id)
);
create table usr (
	user_index int not null auto_increment,
	usrname varchar(50),
	passwd varchar(100),
	name varchar(100),
	email varchar(100),
	role_id char(2),
	constraint pk_user primary key (user_index),
	constraint fk_user_to_role foreign key (role_id) references role(role_id)
);
create table type (
	type_id char(3),
	name varchar(100),
	constraint pk_type primary key (type_id)
);
create table film (
	film_id char(4),
	name varchar(200),
	type_id char(3),
	period int,
	description text,
	trailer_video_link varchar(200),
	photo_link varchar(200),
	constraint pk_film primary key (film_id),
	constraint fk_film_to_type foreign key (type_id) references type(type_id)
);
create table cinema (
	cinema_id char(3),
	name varchar(200),
	address varchar(500),
	introduction text,
	photo_link varchar(200),
	constraint pk_cinema primary key (cinema_id)
);
create table screening (
	screening_id char(5),
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
	constraint fk_ticket_to_seat_type foreign key (screening_id) references seat_type(seat_type_id)
);
create table food (
	food_id char(6),
	name varchar(200),
	price int,
	constraint pk_food primary key (food_id)
);
create table beverage (
	beverage_id char(6),
	name varchar(200),
	price int,
	constraint pk_food primary key (beverage_id)
);
create table bill (
	bill_id char(5),
	usr_index int,
	payment_total int,
	transact_time datetime,
	constraint pk_bill primary key (bill_id),
	constraint fk_bill_to_user foreign key (usr_index) references usr(usr_index)
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




