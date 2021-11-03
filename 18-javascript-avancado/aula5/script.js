const clientes = [
    {name: 'Fulano', lastname: 'Da Silva', age: 14},
    {name: 'Siclano', lastname: 'Santos', age: 18},
    {name: 'Beltrano', lastname: 'Moreira', age: 20},
]

const clientesMaiores = clientes.filter(cliente => {
    if(cliente.age >= 18) return true // matem no array
    else return false // exclui do array
})

// enxuto
const clientesMaiores2 = clientes.filter(cliente => cliente.age >= 18)



console.log(clientesMaiores2)