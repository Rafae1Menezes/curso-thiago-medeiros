/* 

JSON

JAVACRIP OBJECT NOTATION

ANTES OS SISTEMAS SE COMUNICAVAM COM XML

*/

// as propriedades do JSON precisam obrigatoriamente estar entre aspas
// {
//     "nome": "filano",
//     "idade": 23
// }

const objeto = {
    nome: 'filano',
    idade: 23
}

const json = JSON.stringify(objeto) //transform em string

console.log(json)

const jsonParseado = JSON.parse(json) //transfoma em objeto

console.log(jsonParseado.idade)