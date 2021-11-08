//quando for importar um módulo pré-existente do node
//ou de um módulo instalado, não é necessário especificar o diretório dele

const fs = require('fs') //modulo para criar pastas e arquivos

fs.readFile('./clientes.json', function(error, content){
    if(error){
        console.log('Ops, deu erro:', error)
    } else{
        console.log(JSON.parse(content) )
    }
})