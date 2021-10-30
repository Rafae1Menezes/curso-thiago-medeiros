/* for(let x=0; x<10; x++){
    document.write(`Hello World ${x}`)
    document.write('<br>')
} */


let opcoes

for(let contador = 2021; contador >= 1900; contador--){
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes

let clientes = ['Thiago', 'Rafael', 'Fulano', 'Siclano']
let lista = ''

for(let contador = 0; contador < clientes.length; contador++){
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#clientes').innerHTML = lista