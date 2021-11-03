/* 

ARROW FUNCTIONS

ES6

As funções de seta nos permitem escrever uma sintaxe de função mais curta


*/


const soma = (parm1, parm2) => {
    return parm1 + parm2
}

const soma2 = (parm1, parm2) =>  parm1 + parm2 //returno implícito


const teste = nome => { console.log(`olá ${nome}`)} // não pecisa de parênteses 


const $botao = document.querySelector('#botao')

// em uma arrow function o scopo do this 
// sempre vai ser sempre o escopo de quem a chamou. ou seja:
// nesse caso o this não será o botao, e sim o Window
$botao.onclick = () => { 
    console.log(this)
}

