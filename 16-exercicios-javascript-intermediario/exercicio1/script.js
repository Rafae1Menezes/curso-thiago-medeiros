let campo = document.querySelector('#number')
let mais = document.querySelector('#mais')
let menos = document.querySelector('#menos')

function incrementa(campo,operacao){
    let Number = parseInt(campo.innerText)

    if(operacao === 'soma') campo.innerText = Number + 1
    if(operacao === 'subtracao') campo.innerText = Number -1
}

mais.addEventListener('click', ()=> {incrementa(campo, 'soma')})
menos.addEventListener('click', ()=> {incrementa(campo, 'subtracao')})