const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
    // console.log(request.url) // mostra o endeco da url após o domínio

    if(request.url === '/'){
        fs.readFile('../client/index.html', function(error, content){
            response.end(content)
        })
    }else if(request.url === '/teste'){
        response.end('ok deu certo o teste')
    }
        
})

server.listen(8080)

console.log('servidor executando na porta 8080')