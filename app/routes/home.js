module.exports = function(aplicacao){

    // carrega pagina html para tela
    aplicacao.get("/", function(req, res) {
       aplicacao.app.controllers.home.index(aplicacao, req, res);
    });
};