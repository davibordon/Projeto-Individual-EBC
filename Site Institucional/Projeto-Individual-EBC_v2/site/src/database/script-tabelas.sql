create database EBC;
use EBC;

CREATE TABLE usuario (
	id INT PRIMARY KEY auto_increment,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table Quiz (
	idPartida int primary key auto_increment,
    pontos int,
    fkUsuario int,
    foreign key (fkUsuario) references usuario (id)
)auto_increment 500;

insert into usuario values
	(null, 'Davi', 'davi@email.com', 123),
	(null, 'Thiago', 'thiago@email.com', 123);
    
insert into Quiz values
	(null, 2200, 1),
	(null, 3000, 2);
    
select id, sum(pontos) as 'pontos' from usuario join Quiz on fkUsuario = id group by id;