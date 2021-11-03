let campo = document.querySelector('#number')
let mais = document.querySelector('#mais')
let menos = document.querySelector('#menos')
let intervalo

function incrementa(campo,operacao){
    let Number = parseInt(campo.innerText)

    if(operacao === 'soma') campo.innerText = Number + 1
    if(operacao === 'subtracao') campo.innerText = Number -1
}

mais.addEventListener('click', ()=> {
    clearInterval(intervalo)
    intervalo = setInterval(()=>{incrementa(campo, 'soma')}, 200)
    mais.classList.add('active')
    menos.classList.remove('active')
})
menos.addEventListener('click', ()=> {
    clearInterval(intervalo)
    intervalo = setInterval(()=>{incrementa(campo, 'subtracao')}, 200)
    mais.classList.remove('active')
    menos.classList.add('active')
})