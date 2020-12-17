//Configuracoes para consumir API
// const axios = require("axios")

module.exports = function(app){
  
    // consumindo API para baixar os dados e exibindo na tela.
    app.get("/api", async(req, res) => {
        try{
            const { data } = await axios("https://jsonplaceholder.typicode.com/users")
            return res.json(data)
        } catch (error){
            console.log(error)
        }
    })
}
