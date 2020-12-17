module.exports = function(aplicacao){
    aplicacao.get('/saveUsuario', function(req, res){
        res.render('users/saveUsuario')
    })

    aplicacao.post('/usuario/save', function(req, res){
        const usuario = req.body;

        req.assert('nome','Nome e obrigatorio').notEmpty();
        req.assert('sobreNome','sobreNome e obrigatorio').notEmpty();
        req.assert('idade','idade e obrigatorio').notEmpty();
        req.assert('cpf','cpf e obrigatorio').notEmpty();

        const erros = req.validationErrors();
        
        console.log('formulario erro = ', erros)

        if(erros){
            console.log('passou por aqui no if de erros!!!! ', erros)
            const validacao = erros;
           res.render('users/saveUsuario', {validacao : erros});

        //    res.render("users/users", {usuario : resultado});

            console.log('Validacao  ', validacao)
            return;
        }else{
            const connection = aplicacao.config.dbConnection();
            const usersModel = new aplicacao.app.models.usersModel(connection);
    
            usersModel.saveUser(usuario, function(error, resultado){
                res.redirect('/users');
            })
        }
    })
}