const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexão com o banco de dados
db.connect()


//habilita server ara receber dados via post (formulário)
//quando for receber os dados no corpo da requisição não precisa
//app.use(express.urlencoded({ extended: true }))

//habilitar server para receber dados no formao json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))