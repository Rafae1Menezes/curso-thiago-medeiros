/* 

ASYNK / AWAIT

para transformar uma determinada chamada assicrona em sincrona

*/

function exibirNaTela(fotos){
    let html = ''
    fotos.forEach((item)=>{
        html += `<img src='${item.thumbnailUrl}'>`
    })
    document.querySelector('#container').innerHTML = html
}

function exibirErro(fotos){
    document.querySelector('#container').innerHTML = 'Ops, aconteceu um erro'
}

function transformarEmJson(response){
    return response.json()
}



const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = aoClickarNoBotao

//Quando a função contem um await, tem que começar com async
async function aoClickarNoBotao(){
    // na frente de uma função que é uma Promisse eu coloco await
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos') // o padrão é GET
        .then(transformarEmJson)
        .catch(exibirErro)

    //agora ele só passa para próximas linhas de código quano dados forem carregados
    exibirNaTela(dados)
}
    

