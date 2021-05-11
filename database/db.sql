create database presupuesto;

use database presupuesto;

create table balance_table(
	id_balance int auto_increment primary key,
	creation_date date not null,
	operation_type int not null,
	description varchar(50)
	amount float not null,
	id_location int not null,
	id_user int not  null
);


create table locations(
	id_location int auto_increment primary key,
	description varchar(50) not null
);

create table users(
	id_user int auto_increment primary key,
	name varchar(50) not null,
	pass varchar(50) not null,
	rol varchar(50) not null
);
//test

alter table balance_table  add foreign key (id_user) references users(id_user);
alter table balance_table  add foreign key (id_location) references locations(id_location);
