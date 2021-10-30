let clientes = [
    {
        nome: 'Rafael',
        idade: 33,
        linguaguens: ['javascript', 'python', 'php']
    },
    {
        nome: 'Thiago',
        idade: 35,
        linguaguens: ['phyton', 'ruby', 'C']
    },
    {
        nome: 'Fulano',
        idade: 33,
        linguaguens: ['C++', 'java', 'go']
    },
]

let htmlclientes = ''


for (const cliente of clientes) {
    
    let listaLinguagens = ''

    for (const linguagem of cliente.linguaguens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
    
    htmlclientes += `
        <li>
            <strong>Nome: </strong>${cliente.nome} <br>
            <strong>Idade: </strong> ${cliente.idade} <br>
            <strong>Linguagens: </strong> <br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>`
}

document.querySelector('#listaClientes').innerHTML = htmlclientes