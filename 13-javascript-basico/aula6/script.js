/* 

string
number
boolean
array
objetcct
undefined
null

*/

// string
let nome = 'Thiago'
console.log(nome)

// String concatenada
let sobrenome = 'Menezes'
// console.log(nome+ ' ' + sobrenome)

// string literal
console.log(`${nome} ${sobrenome}`)


// Number
let idade = 33
console.log(idade)
console.log(idade + 10)

// number float
let porcentagem = 10.2
console.log(porcentagem + '%')

// Booleam
let maiorDeIdade = true //ou false
console.log(maiorDeIdade)

// Array
let habilidades = ['Javascript',  'PHP', 'Python']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[1])

// Object
let pessoa = {
    nome: 'fulano',
    sobrenome: 'da silva',
    idade: 35,
    habilidades: ['c++', 'c#', 'python']
}

console.log(pessoa)
console.log(pessoa.sobrenome)
console.log(pessoa.habilidades)

// Undefine
let endereco
console.log(endereco)

// NULL
let cidade = null
console.log(cidade)