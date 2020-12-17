module.exports = function(aplicacao){
    aplicacao.get('/saveUsuario', function(req, res){
        res.render('users/saveUsuario', {validacao : false, usuario : {}})
    })

    aplicacao.post('/usuario/save', function(req, res){
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
        
    })
}