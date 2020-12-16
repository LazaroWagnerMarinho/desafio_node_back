//Conexao com BD MySQL
const mysql = require('mysql2')

//exportando configuracao de banco
module.exports = function(){

    //Configuracao para conectar com BD MySQL
   return  connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'hospedadosusuario',
        insecureAuth : true
    })

    //Verefique se houve erro de conexao
    // connection.connect(function (error){
    //     if(error){
    //         console.error('error de conexao com Banco de Dados: ' + error.stack);
    //         return;
    //     }
    // });

    // connection.query("INSERT INTO users(nome, email, hospedagem) VALUES ('Kelly', 'kelly@kelly.com', null)", function(error, resultado){
    //     if(error){
    //         console.log('Erro ao cadastrar usuario!')
    //     }else{
    //         console.log('Usuario cadastrado com sucesso!')   
    //     }
    // })
}