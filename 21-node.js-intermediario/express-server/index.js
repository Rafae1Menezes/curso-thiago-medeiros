const express = require('express')
//express é uma função que retorna a um objeto, uma aplicação
const app = express()

//uma bibliteca específica para lidar com o path para não precisar concatenar o path
const path = require('path')

//MVC é um padrão de pastas para desevolvimento 
//model é tudo que vai contar com o banco de dados
//view tudo que vai contar com a visualização
//controller é responsável para consultar o model, tratar e enviar para view


//========== DEFININDO OS ARQUIVOS ESTATICOS
//definir onde estão os arquivos estáticos
//ele precisa do enderço completo do path
// forma mais correta de concatenar um path
const statticFolder = path.join(__dirname, 'views')
const expressStatic = express.static(statticFolder)
app.use(expressStatic)//middleware
// a maneira mais comum é esse código em uma linha
//app.use(express.static(path.join(__dirname, 'views')))

//========== DEFININDO OS ARQUIVOS PÚBLICOS
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)//middleware
//app.use(express.static(path.join(__dirname, 'public')))


//criando as rotas
app.get('/', (req, res)=>{
    res.render('views/index')
})

app.get('/sobre', (req, res)=>{
    res.send('sobre')
})





//(error 404)
app.use((req,res)=>{  //isso se chama middleware: algo que se executa entre uma requisição, antes dele executar qualquer outra rota 
    res.send('Página não encontrada =(')
})




//executando o servidor
//para usar a porta que servidor disponibilizar
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))