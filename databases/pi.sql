CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `endereco` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `endereco_fk_idx` (`usuario_id`),
  CONSTRAINT `endereco_fk` FOREIGN KEY (`usuario_id`) REFERENCES `cliente` (`id`) ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `forma_de_pagamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `data` datetime NOT NULL,
  `forma_pagamento_id` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `endereco_id` int NOT NULL,
  `obs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_enderecoid_idx` (`endereco_id`),
  KEY `pedidos_ibfk_2_idx` (`cliente_id`),
  KEY `pedidos_ibfk_3_idx` (`forma_pagamento_id`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`endereco_id`) REFERENCES `enderecos` (`id`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`forma_pagamento_id`) REFERENCES `forma_de_pagamento` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `preco` varchar(45) NOT NULL,
  `img` varchar(45) NOT NULL,
  `destaque` varchar(45) NOT NULL,
  `score` int NOT NULL,
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produto_fk_1_idx` (`categoria_id`),
  CONSTRAINT `produto_fk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

