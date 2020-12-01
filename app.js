//load our app server using express somehow
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql2')

app.use(morgan('combined'))

app.get('/user/:id', (req, res) => {
    console.log("Buscandoo usuario por Id: " + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ImpactoRev#01',
        database: 'testeusuario',
        insecureAuth : true
    })

    const userId = req.params.id
    const queryString = "SELECT * FROM users WHERE id = ?"     
    connection.query(queryString, [userId], (err, rows, fields) => {
        if(err) {
            console.log("Falha na query usuario: " + err)
            res.sendStatus(500)
            throw err
        }
        console.log("Encontramos usuario com sucesso")
        res.json(rows)
    })

    // res.end()
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from ROT")
})

app.get("/users", (req, res) =>{
var user1 = {firstName: "Strphen", lastName: "Curry"}
const user2 = {firstName: "Kevin", lastName: "Durant"}
res.json([user1, user2])
    //res.send("Nodemon auto update when I save this file")
})

//localhost:7070
app.listen(7070, () => {
    console.log("Server is up and listening on 7070...")
})