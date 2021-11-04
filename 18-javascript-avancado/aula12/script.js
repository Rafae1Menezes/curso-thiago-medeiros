/* 

PROMISE
ela executa uma função e me promete me chamar de volta quando 
terminar a função dela
é utilizado principalmente para códigos assíncronos 

*/

function exibirNaTela(fotos){
    let html = ''
    fotos.forEach((item)=>{
        html += `<img src='${item.thumbnailUrl}'>`
    })
    document.querySelector('#container').innerHTML = html
}

function exibirErro(){
    document.querySelector('#container').innerHTML = 'Ops, deu erro.'
}


const botaoCarregar = document.querySelector('#botaoCarregar')
botaoCarregar.onclick = () => 
    carregarFotos()
        .then(exibirNaTela)
        .catch(exibirErro)



function carregarFotos(){
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpRequest()

        //quando o servidor terminar de fazer as duas requisições seguintes que pedi
        xhttp.onreadystatechange = function () {
            //O código 4 é para quando estiver finalizada a execução
            //200 é o status da operação
            if(this.readyState == 4 && this.status == 200){
                const response = JSON.parse(this.responseText) 
                
                resolve(response)
            } 
            else if(this.status == 404){
                reject()
            } 
        }

        //conectar com o servidor (true para assincrono, false para sincrono)
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

        //enviando a conexão
        xhttp.send()
    }) 
}