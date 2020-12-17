//Framework de BD MySQL
const mysql = require('mysql2')

const connMySQL = function(){

    //Configuracao para conectar com BD MySQL
   return  connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'hospedadosusuario',
        insecureAuth : true
    })
}

//exportando configuracao de banco quando for necessario.
module.exports = function(){
    return connMySQL;
}