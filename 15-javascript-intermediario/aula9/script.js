let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()
    
    let inputNome = document.forms['formCadastro']['nome']
    let inputEmail = document.forms['formCadastro']['email']
    let selectCidade = document.forms['formCadastro']['cidade']
    let span
    let temErro = false

    // INPUT NOME
    if(!inputNome.value){
        inputNome.classList.add('inputError')
        span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamete'
        temErro = true
    }else{
        inputNome.classList.remove('inputError')
        span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    // INPUT EMAIL
    if(!inputEmail.value){
        inputEmail.classList.add('inputError')
        span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o e-mail corretamete'
        temErro = true
    }else{
        inputEmail.classList.remove('inputError')
        span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    // INPUT CIDADE
    if(!selectCidade.value){
        selectCidade.classList.add('inputError')
        span = selectCidade.nextSibling.nextSibling
        span.innerText = 'Selecione uma cidade'
        temErro = true
    }else{
        selectCidade.classList.remove('inputError')
        span = selectCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro)
        formulario.submit()
}