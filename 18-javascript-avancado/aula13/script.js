/* 

FETCH

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
    console.log(response)
    console.log('------------------------')
    console.log(response.json())

    return response.json()
}

const configs = {
    method: 'GET',
    headers: {}
}

const botaoCarregar = document.querySelector('#botaoCarregar')
botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos', configs) // o padrão é GET
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)

