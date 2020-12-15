module.exports = function(app){

    // carrega pagina html para tela
    app.get("/", async(req, res) => {
        res.render("home/index");        
    })
};