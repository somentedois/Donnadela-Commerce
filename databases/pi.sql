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
  FOREIGN KEY (cliente_id) REFERENCES cliente (`id`),
  FOREIGN KEY (forma_pagamento_id) REFERENCES forma_de_pagamento (id)
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

INSERT INTO categorias (nome) VAlUES
('Orelha'),
('Boca'),
('Nariz'),
('Sombrancelha'),
('Umbigo'),
('Mamilo'),
('Íntimos');