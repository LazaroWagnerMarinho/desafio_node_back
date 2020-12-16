// Importando configuracao de BD
const dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    const connection = dbConnection();

    app.get('/users', function(req, res){

        connection.query('select * from users', function (error, resultado){
            // res.send(resultado)
            res.render("users/users", {usuario : resultado});
        });   
    });

    // app.get('/user/:id', (req, res) => {
    //     console.log("Buscandoo usuario por Id: " + req.params.id)

    //     const userId = req.params.id
    //     const queryString = "SELECT * FROM users WHERE id = ?"     
    //     connection.query(queryString, [userId], (err, rows, fields) => {
    //         if(err) {
    //             console.log("Falha na query usuario: " + err)
    //             res.sendStatus(500)
    //             return
    //             // throw err
    //         }else{
    //             console.log("Encontramos usuario com sucesso")

    //             const users = rows.map((row) => {
    //                 return {
    //                     Nome: row.firstName,
    //                     SobreNome: row.lastName,
    //                 }
    //             })

    //             res.json(users)
    //         }
            
    //     })

    //     // res.end()
    // })
}