function enter(){
    const nameInput = prompt('Digite seu nome:')
    const ageInput = prompt('Digite sua idade:')
    

    if(nameInput !== '' && ageInput !== ''){
        const age = parseInt(ageInput)
        let saudacao = `Olá, ${nameInput}`
        let msg

        if(age >= 18){
            if(nameInput === 'Thomas Anderson')
                msg = `você é MAIOR de idade, Você é personagem do filme The Matrix!`
            else
                msg = `você é MAIOR de idade`
        }
        else{
            msg = `você é MENOR de idade`
        }

        document.querySelector('#saudacao').innerHTML = saudacao
        document.querySelector('#mensagem').innerHTML = msg
    }else{
        alert(`Preencha os campos corretamente`)
    }

}