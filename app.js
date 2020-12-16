const app = require('./config/server')

// const rotaHome = require('./app/routes/home')(app);

// const rotaApi = require('./app/routes/api')(app);

// const rotaUsers = require('./app/routes/users')(app);


//localhost:7070
app.listen(7070, () => {
    console.log("O servidor rodando em  localhost:7070")
})