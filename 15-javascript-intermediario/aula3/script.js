//Seletores
// SELETOR POR ID
document.querySelector('#titulo').innerHTML = 'Exemplo'

// SELETOR POR TAG
document.querySelector('a').innerHTML = 'Teste âncora'

// SELECTOR DE MAIS DE UM ITEM POR TAG
const ancoras = document.querySelectorAll('a')
ancoras.forEach((elemento)=>{
    elemento.innerHTML = 'Teste 2'
})

// SELECTOR DE MAIS DE UM ITEM POR CLASSE
const caixas = document.querySelectorAll('.box')
caixas.forEach((elemento, index)=>{
    elemento.innerHTML = 'Box ' + (index+1)
})