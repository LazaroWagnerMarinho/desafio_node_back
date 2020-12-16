// fazendo busca pela URL com id definido e retornando para tela de users.ejs 
module.exports = function(app){    

    app.get('/user/:id', function(req, res){

        //faz conexao com Banco de Dados quando for acessado pela rota users.
        const connection = app.config.dbConnection();

        const userId = req.params.id
        const queryString = "SELECT * FROM users WHERE id = ?"
        connection.query(queryString, [userId], (error, resultado, filds) => {
            if(error){
                console.log('Falha na query usuario: ', error)
                res.sendStatus(500)
                return
            }else{
                console.log('Encontramos usuario com sucesso')
                res.render("users/users", {usuario : resultado});
            }
        });   
    });

    

}