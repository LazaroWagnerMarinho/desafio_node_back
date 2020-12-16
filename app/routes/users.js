
module.exports = function(app){    

    app.get('/users', function(req, res){

        //faz conexao com Banco de Dados quando for acessado pela rota users.
        const connection = app.config.dbConnection();

        const usersModel = app.app.models.usersModel;

        usersModel.getUsers(connection, function (error, resultado){
        
            // retorna a busca do banco para tela de HTML.
            res.render("users/users", {usuario : resultado});
        });
    });

}