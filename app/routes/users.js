
module.exports = function(aplicacao){    

    aplicacao.get('/users', function(req, res){

        //faz conexao com Banco de Dados quando for acessado pela rota users.
        const connection = aplicacao.config.dbConnection();

        const usersModel = aplicacao.app.models.usersModel;

        usersModel.getUsers(connection, function (error, resultado){
        
            // retorna a busca do banco para tela de HTML.
            res.render("users/users", {usuario : resultado});
        });
    });

}