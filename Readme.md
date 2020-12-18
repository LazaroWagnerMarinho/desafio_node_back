# criando Schema no MySQL
```
    CREATE SCHEMA `hospedadosusuario`
```
# executa o codigo abaixo para criar tabela e salvar formulario:
```
    CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `hospedagem` varchar(45) DEFAULT NULL,
  `sobreNome` varchar(45) DEFAULT NULL,
  `idade` varchar(2) DEFAULT NULL,
  `cpf` varchar(45) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `contato` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	'
```
# Cofiguracao do MySQL para ter conexao entre nodeJs e banco MySQL:
```   
    login: root
    senha: 123456
    localhost:3306
```
## Esse projeto requer o node.js versão 12.0 ou superior Instalado na sua maquina.

### Ao baixar o Projeto executar no terminal os comandos apresentado abaixos:

```
npm install
```
 ### Apos terminar de baixar pasta 'node_module' executar no terminal o comando abaixo: 

 ```
 nodemon app
 ```

 ## Apos executar o codigo acima, acessa o link apresentado abaixo: 
 ```
 http://localhost:7070/
 ```
