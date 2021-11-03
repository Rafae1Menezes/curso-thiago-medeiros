let form = document.querySelector('#formulario')
let button = document.querySelector('#enviar')
let selectEstados = document.querySelector('#estados')
let selectCidades = document.querySelector('#cidades')
const cidades =  {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

// PARA QUANDO MUDAR DE ESTADO
selectEstados.addEventListener('change', ()=>{
    if(selectEstados.value){
        let listaCidades = '<option value="">- Selecione -</option>'
        cidades[selectEstados.value].forEach(element => {
            listaCidades += `<option value="${element}">${element}</option>`
        });
        selectCidades.innerHTML = listaCidades
        selectCidades.parentElement.classList.remove('invisible')
        selectCidades.classList.remove('inputError')
        selectEstados.nextSibling.nextSibling.innerText = ''
        selectEstados.nextSibling.nextSibling.classList.add('invisible')
        selectEstados.classList.remove('inputError')
    }else{
        selectCidades.parentElement.classList.add('invisible')
        selectCidades.nextSibling.nextSibling.innerText = ''
        selectCidades.nextSibling.nextSibling.classList.add('invisible')
        selectCidades.classList.remove('inputError')
    }
})

// PARA QUANDO MUDAR DE CIDADE
selectCidades.addEventListener('change', ()=>{
    if(selectCidades.value){
        selectCidades.nextSibling.nextSibling.innerText = ''
        selectCidades.nextSibling.nextSibling.classList.add('invisible')
        selectCidades.classList.remove('inputError')
    }
})

// PARA QUANDO TENTAR ENVIAR O FORMULÁRIO
form.onsubmit =(evento)=>{
    evento.preventDefault()
    let temErro = false

    if(!selectEstados.value){
        selectEstados.nextSibling.nextSibling.innerText = 'Selecione um estado'
        selectEstados.nextSibling.nextSibling.classList.remove('invisible')
        selectEstados.classList.add('inputError')
        temErro = true
    }

    if(!selectCidades.value && selectEstados.value){
        selectCidades.nextSibling.nextSibling.innerText = 'Selecione uma cidade'
        selectCidades.nextSibling.nextSibling.classList.remove('invisible')
        selectCidades.classList.add('inputError')
        temErro = true
    }else{
        selectCidades.nextSibling.nextSibling.innerText = ''
        selectCidades.nextSibling.nextSibling.classList.add('invisible')
        selectCidades.classList.remove('inputError')
    }
    
    if(!temErro) form.submit()
}   