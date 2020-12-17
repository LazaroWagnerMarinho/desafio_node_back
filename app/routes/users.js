
module.exports = function(aplicacao){    

    aplicacao.get('/users', function(req, res){
        aplicacao.app.controllers.users.usuarios(aplicacao, req, res);
    });

    aplicacao.get('/user/:id', function(req, res){
        aplicacao.app.controllers.users.user_id(aplicacao, req, res);
    });

    aplicacao.get('/saveUsuario', function(req, res){
        aplicacao.app.controllers.users.saveUsuario(aplicacao, req, res);
    })

    aplicacao.post('/usuario/save', function(req, res){
        aplicacao.app.controllers.users.usuario_save(aplicacao, req, res);
    })

}