const app = require('./config/server')

const rotaHome = require('./app/routes/home')(app);

const rotaApi = require('./app/routes/api')(app);

const rotaUsers = require('./app/routes/usuarios')(app);


//Conexao com BD MySQL
const mysql = require('mysql2')

const morgan = require('morgan')



const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))

// app.use(express.static('./public'))

app.use(morgan('combined'))

    //Configuracao para conectar com BD MySQL
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'hospedadosusuario',
        insecureAuth : true
    })

    connection.connect(function (error){
        if(error){
            console.error('error de conexao com Banco de Dados: ' + error.stack);
            return;
        }
    });

    connection.query("INSERT INTO users(nome, email, hospedagem) VALUES ('Kelly', 'kelly@kelly.com', null)", function(error, resultado){
        if(error){
            console.log('Erro ao cadastrar usuario!')
        }else{
            console.log('Usuario cadastrado com sucesso!')   
        }
    })

// app.get('/user/:id', (req, res) => {
//     console.log("Buscandoo usuario por Id: " + req.params.id)

//     const userId = req.params.id
//     const queryString = "SELECT * FROM users WHERE id = ?"     
//     connection.query(queryString, [userId], (err, rows, fields) => {
//         if(err) {
//             console.log("Falha na query usuario: " + err)
//             res.sendStatus(500)
//             return
//             // throw err
//         }else{
//             console.log("Encontramos usuario com sucesso")

//             const users = rows.map((row) => {
//                 return {
//                     Nome: row.firstName,
//                     SobreNome: row.lastName,
//                 }
//             })

//             res.json(users)
//         }
        
//     })

//     // res.end()
// })


//localhost:7070
app.listen(7070, () => {
    console.log("O servidor rodando em  localhost:7070")
})