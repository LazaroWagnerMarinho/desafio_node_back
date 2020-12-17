module.exports.saveUsuario = function(aplicacao, req, res){
    res.render('users/saveUsuario', {validacao : false, usuario : {}})
}

module.exports.usuario_save = function(aplicacao, req, res){
    const usuario = req.body;

    req.assert('nome','Nome e obrigatorio').notEmpty();
    req.assert('sobreNome','sobreNome e obrigatorio').notEmpty();
    req.assert('idade','idade e obrigatorio').notEmpty();
    req.assert('cpf','cpf e obrigatorio').notEmpty();
    req.assert('email','email e obrigatorio').isEmail();
    req.assert('endereco','endereco e obrigatorio').notEmpty();
    req.assert('contato','contato e obrigatorio ou Numero').notEmpty();
    req.assert('hospedagem','hospedagem e obrigatorio').notEmpty();

    const erros = req.validationErrors();

    if(erros){
        res.render('users/saveUsuario', {validacao : erros, usuario : usuario});
        return;
    }
    const connection = aplicacao.config.dbConnection();
    const usersModel = new aplicacao.app.models.usersModel(connection);

    usersModel.saveUser(usuario, function(error, resultado){
        res.redirect('/users');
    })
}

module.exports.usuarios = function(aplicacao, req, res){
    //faz conexao com Banco de Dados quando for acessado pela rota users.
    const connection = aplicacao.config.dbConnection();

    const usersModel = new aplicacao.app.models.usersModel(connection);

    usersModel.getUsers(function (error, resultado){
    
        // retorna a busca do banco para tela de HTML.
        res.render("users/users", {usuario : resultado});
    });
}

module.exports.user_id = function(aplicacao, req, res){
    
    //faz conexao com Banco de Dados quando for acessado pela rota users.
    const connection = aplicacao.config.dbConnection();

    const userId = req.params.id

    const userModel = new aplicacao.app.models.usersModel(connection);

    userModel.getUserId(userId, function(error, resultado){
        if(error){
            console.log('Falha na query usuario: ', error)
            res.sendStatus(500)
            return
        }else{
            console.log('Encontramos usuario com sucesso')
            res.render("users/users", {usuario : resultado});
        }
    })
}
