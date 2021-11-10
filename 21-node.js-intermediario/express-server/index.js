const fs = require('fs')

const express = require('express')
//express é uma função que retorna a um objeto, uma aplicação
const app = express()

//configurando uma view engine
app.set('view engine', 'ejs')

//uma bibliteca específica para lidar com o path para não precisar concatenar o path
const path = require('path')

//MVC é um padrão de pastas para desevolvimento 
//model é tudo que vai contar com o banco de dados
//view tudo que vai contar com a visualização
//controller é responsável para consultar o model, tratar e enviar para view


//========se for usar template engine não precisa definir os arquivos estáticos
//========== DEFININDO OS ARQUIVOS ESTATICOS
//definir onde estão os arquivos estáticos
//ele precisa do enderço completo do path
// forma mais correta de concatenar um path
// const statticFolder = path.join(__dirname, 'views')
// const expressStatic = express.static(statticFolder)
// app.use(expressStatic)//middleware
// a maneira mais comum é esse código em uma linha
// app.use(express.static(path.join(__dirname, 'views')))

//========== DEFININDO OS ARQUIVOS PÚBLICOS
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)//middleware
//app.use(express.static(path.join(__dirname, 'public')))

//outro middleware para habilitar o servidor para receber dados de um formulário via post
app.use(express.urlencoded({ extended: true}))


//criando as rotas
//com o ejs não precisamos indicar que os arquivos estão na pasta views
app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Romeu e Julieta - Home'
    })
})

//simulando uma consulta no banco de dados
const produtos = require('./store/produtos.json');
const { json } = require('express')


app.get('/produtos', (req, res)=>{
    res.render('produtos', {
        title: 'Romeu e Julieta - Produtos',
        products: produtos
    })
})

app.get('/cadastro', (req, res)=>{
    const {c} = req.query
    res.render('cadastro-produtos', {
        title: 'Romeu e Julieta - Cadastro',
        cadastrado: c
    })
})

app.post('/salvar-produto', (req, res)=>{
    const {url, stars} = req.body

    const data = fs.readFileSync('./store/produtos.json')
    const produtos = JSON.parse(data)

    produtos.push({
        urlfoto: url,
        stars: stars 
    })
    
    const stringData = JSON.stringify(produtos)
    fs.writeFileSync('./store/produtos.json', stringData)

    res.redirect('/cadastro?c=1')
})




//(error 404)
app.use((req,res)=>{  //isso se chama middleware: algo que se executa entre uma requisição, antes dele executar qualquer outra rota 
    res.send('Página não encontrada =(')
})




//executando o servidor
//para usar a porta que servidor disponibilizar
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))