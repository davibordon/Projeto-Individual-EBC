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
    foreign key (fkUsuario) references usuario (id),
    horaPartida datetime
)auto_increment 500;

insert into usuario values
	(null, 'Davi', 'davi@email.com', 123),
	(null, 'Thiago', 'thiago@email.com', 123);
    
insert into Quiz values
	(null, 20, 1, now()),
	(null, 30, 2, now());
    
    


select * from Quiz;
select * from usuario;
select id, sum(pontos) as 'pontos' from usuario join Quiz on fkUsuario = id group by id;

select id, idPartida, pontos, horaPartida from usuario join Quiz on fkUsuario = id and id = 3 order by idPartida desc limit 5;
