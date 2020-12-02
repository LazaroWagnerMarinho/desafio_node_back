//load our app server using express somehow
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql2')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('combined'))

app.post('user_create', (req, res) => {
    console.log("Trying to create a new user...")
    console.log("How do we get the form data???")

    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name
    res.end()
})

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hospedadosusuario',
    insecureAuth : true
})

app.get('/user/:id', (req, res) => {
    console.log("Buscandoo usuario por Id: " + req.params.id)

    const userId = req.params.id
    const queryString = "SELECT * FROM users WHERE id = ?"     
    connection.query(queryString, [userId], (err, rows, fields) => {
        if(err) {
            console.log("Falha na query usuario: " + err)
            res.sendStatus(500)
            return
            // throw err
        }
        console.log("Encontramos usuario com sucesso")

        const users = rows.map((row) => {
            return {
                Nome: row.firstName,
                SobreNome: row.lastName,
            }
        })

        res.json(users)
    })

    // res.end()
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Ola Sr ROOT")
})

app.get("/users", (req, res) => {

    const queryString = "SELECT * FROM users"

    connection.query(queryString, (err, rows, fields) => {
        res.json(rows)
    })
})

//localhost:7070
app.listen(7070, () => {
    console.log("Server is up and listening on 7070...")
})