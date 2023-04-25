DROP DATABASE IF EXISTS projeto_integrador;
CREATE DATABASE projeto_integrador;
use projeto_integrador;

CREATE TABLE cliente (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE KEY,
  senha varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE enderecos (
  id int NOT NULL AUTO_INCREMENT,
  cliente_id int NOT NULL,
  endereco varchar(255) NOT NULL,
  numero varchar(255) NOT NULL,
  bairro varchar(255) NOT NULL,
  cidade varchar(255) NOT NULL,
  estado char(2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

CREATE TABLE categoria (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE forma_de_pagamento (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE produto (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(45) NOT NULL,
  preco varchar(45) NOT NULL,
  img varchar(45) NOT NULL,
  destaque varchar(45) NOT NULL,
  score int NOT NULL,
  categoria_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (categoria_id) REFERENCES categoria (id)
);

CREATE TABLE pedido (
  id int NOT NULL AUTO_INCREMENT,
  cliente_id int NOT NULL,
  data datetime NOT NULL,
  forma_pagamento_id int NOT NULL,
  total decimal(10,2) NOT NULL,
  endereco_id int NOT NULL,
  obs varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (endereco_id) REFERENCES enderecos (id),
  FOREIGN KEY (cliente_id) REFERENCES cliente (id),
  FOREIGN KEY (forma_pagamento_id) REFERENCES forma_de_pagamento (id),
);

CREATE TABLE pedidoxproduto (
  id int NOT NULL AUTO_INCREMENT,
  produto_id int NOT NULL,
  pedido_id int NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produto (id),
  FOREIGN KEY (pedido_id) REFERENCES pedido (id),



INSERT INTO categorias (nome) Values
('Orelha'),
('Boca'),
('Nariz'),
('Sombrancelha'),
('Umbigo'),
('Mamilo'),
('Íntimos');

INSERT INTO cliente(nome, email, senha) Values 
('Matheus', 'matheus@dh.com.br', '123456'),
('Wellyngton', 'wellynton@dh.com.br', '545846'),
('Pietra', 'pietra@dh.com.br', 'asihduhdwu'),
('Sergio', 'sergio@dh.com.br', '123456');

INSERT INTO endereco(cliente_id, endereco, numero, bairro, cidade, estado) Values
(1, 'Rua das Acasias', '98', 'Jardim Primavera', 'Quatá', 'SP'),
(1, 'Rua das Azaleias', '115', 'Jardim Primavera', 'Rancharia', 'SP'),
(2, 'Rua Reginaldo Rossi', '478', 'Bairro dos Cantor', 'Osasco', 'SP'),
(3, 'Rua Vanusa', '176', 'Jardim Cantores do Hino', 'Santos', 'SP'),
(4, 'Rua du Curintia', '98', 'Jardim Perigoso', 'São Paulo', 'SP');

INSERT INTO forma_de_pagamento(nome) Values
('Dinhero'),
('Cartão de crédito'),
('Cartão de débito'),
('Pix'),
('Boleto');

INSERT INTO produto (nome, preco, img, destaque, score, categoria_id) Values
('Piercing Orelha Direita', 87.0, '/img/foto2.jpg', 1, 28, 1),
('Piercing Orelha Esquerda', 62.0, '/img/foto2.jpg', 0, 16, 0),
('Piercing Nariz', 13.0, '/img/foto2.jpg', 1, 25, 3),
('Piercing Lábio', 891.0, '/img/foto2.jpg', 0, 13, 2),


INSERT INTO pedido(cliente_id, data, forma_pagamento_id, total, endereco_id) Values
(1, 2022-03-15 18:30:00, 1, 134.0, 1)
(1, 2022-03-16 20:30:00, 2, 134.0, 2)
(2, 2023-01-16 09:30:00, 3, 134.0, 1)
(3, 2023-02-28 12:45:00, 4, 134.0, 1)




