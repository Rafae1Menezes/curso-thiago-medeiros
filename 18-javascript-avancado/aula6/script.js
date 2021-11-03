const clientes = [
    {name: 'Thiago', score: 80},
    {name: 'Patricia', score: 45},
    {name: 'Sarah', score: 14},
    {name: 'Rafael', score: 50},
    {name: 'Felipe', score: 66}
]

// Reduc não te força a sempre retornar um array como map e filter

// metodo forEach
let res = {
    pass: [],
    fail: []
}

clientes.forEach(cliente => {
    if(cliente.score >= 50) res.pass.push(cliente.name)  
    else res.fail.push(cliente.name)  
});

// console.log(res)

// acc = accumulator
// curr = current

// Metodo Reduce
const clientesFinal = clientes.reduce((acc, curr)=>{

    if(curr.score >= 50) acc.pass.push(curr)  
    else                 acc.fail.push(curr) 

    return acc

}, { pass: [], fail: [] }) //definimos como será a variável acc

console.log(clientesFinal)

// outro exemplo
const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc,curr)=>{
    
    if(numeros.indexOf(curr) !== 0) acc += ' - '
    return acc + (curr+1)

}, '')

console.log(numerosFinal)