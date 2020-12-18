//Configuracoes para consumir API
const axios = require("axios")

module.exports = function(app){
  
    // consumindo API para baixar os dados e exibindo na tela todos os resultados.
    app.get("/api", async(req, res) => {
        try{
            const { data } = await axios("https://jsonplaceholder.typicode.com/users")

            return res.json(data)
        } catch (error){
            console.log(error)
        }
    })

    // consumindo API e ordenando em ordem alfabetica e exibindo na tela.
    app.get("/apiAlfabetica", async(req, res) => {
        try{
            const { data } = await axios("https://jsonplaceholder.typicode.com/users")

            const users = data.map((row) => {
                return {
                    nome: row.name,
                    email: row.email,
                    empresa: row.company.name
                    }
            })

            const resultado = users.sort(function(a, b){
                if(a.nome > b.nome){
                    return 1;
                }
                if (a.nome < b.nome) {
                    return -1;
                }
                return 0;
            })  
            return res.json(resultado)
        } catch (error){
            console.log(error)
        }
    })

        // consumindo API e exibindo na tela todos os resultados que seja Suite.
        app.get("/suite", async(req, res) => {
            try{
                const { data } = await axios("https://jsonplaceholder.typicode.com/users")
                
                const resultado = [];

                for( let i=0; i < data.length; i++){
                    if(data[i].address.suite.indexOf("Suite") !== -1){
                        resultado.push(data[i])
                    }
                }

                const users = resultado.map((row) => {
                    return {
                        nome: row.name,
                        email: row.email,
                        empresa: row.company.name,
                        quarto: row.address.suite
                    }
                })
                return res.json(users)
            } catch (error){
                console.log(error)
            }
        })
}
