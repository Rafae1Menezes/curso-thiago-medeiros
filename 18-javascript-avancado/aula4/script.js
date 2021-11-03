const clientes = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name: 'Siclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'},
]

let clientesFinal = []

clientes.forEach(cliente => {
    clientesFinal.push(cliente.name +  ' ' + cliente.lastname)    
});

console.log(clientesFinal)

//OUTRA MANEIRA DE FAZER ISSO É ATRAVÉS DO MÉTODO MAP
//MAP É MAIS VOLTADO PARA PROGRAMAÇÃO FUNCIONAL


//É UM MÉTODO QUE PERCORRE ARRAY E RETORNA AUTOMATICAMENTE UM ARRAY
const clientesFinalMap = clientes.map((cliente)=>{
    return cliente.name +  ' ' + cliente.lastname
})

//enxuta
const clientesFinalMap2 = clientes.map(cliente => cliente.name+' '+cliente.lastname)


console.log(clientesFinalMap)