/* 

DESTRUCTURING ASSIGMENT
(desestruturaçao de atribição)

*/

function transformarEmJson(response){
    return response.json()
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = aoClickarNoBotao

//Quando a função contem um await, tem que começar com async
async function aoClickarNoBotao(){
    // na frente de uma função que é uma Promisse eu coloco await
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1') // o padrão é GET
        .then(transformarEmJson)

    const {name, email, phone} = dados //DESTRUCTURING ASSIGMENT

    console.log(`nome: ${name}`)
    console.log(`e-mail: ${email}`)
    console.log(`Tel: ${phone}`)
}
    

