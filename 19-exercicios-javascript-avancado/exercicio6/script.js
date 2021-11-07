let content = document.querySelector('#content')
let divButton = document.querySelector('#divButton')
let button = document.querySelector('#button')
let msgInput = document.querySelector('#mensagem')

function carrega(){
    divButton.innerHTML = '<img src="images/loading.gif">'
}

function envia(){
    content.innerHTML = msgInput.value
}


function missao(){
    return new Promise((resove, reject)=>{
        carrega()
        setTimeout(resove,10000)
    })
}

button.onclick = () => {
    const promessa = missao()
    promessa.then(envia)
}