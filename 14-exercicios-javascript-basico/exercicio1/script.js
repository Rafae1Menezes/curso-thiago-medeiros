const nameInput = prompt('Digite seu nome:')
const ageInput = prompt('Digite sua idade:')
const age = parseInt(ageInput)
let msg


if(age >= 18)
    msg = `Olá, ${nameInput}, você é MAIOR de idade`
else   
    msg = `Olá, ${nameInput}, você é MENOR de idade`

document.write(msg)