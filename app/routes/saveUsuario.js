module.exports = function(aplicacao){
    aplicacao.get('/saveUsuario', function(req, res){
        res.render('users/saveUsuario')
    })

    aplicacao.post('/usuario/save', function(req, res){
        const usuario = req.body;

        const connection = aplicacao.config.dbConnection();
        const usersModel = new aplicacao.app.models.usersModel(connection);

        usersModel.saveUser(usuario, function(error, resultado){
            res.redirect('/users');
        })
    })
}