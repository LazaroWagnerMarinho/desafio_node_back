// fazendo busca pela URL com id definido e retornando para tela de users.ejs 
module.exports = function(aplicacao){    

    aplicacao.get('/user/:id', function(req, res){

        //faz conexao com Banco de Dados quando for acessado pela rota users.
        const connection = aplicacao.config.dbConnection();

        const userId = req.params.id

        const userModel = new aplicacao.app.models.usersModel;

        userModel.getUserId(userId, connection, function(error, resultado){
            if(error){
                console.log('Falha na query usuario: ', error)
                res.sendStatus(500)
                return
            }else{
                console.log('Encontramos usuario com sucesso')
                res.render("users/users", {usuario : resultado});
            }
        })
           
    });

}