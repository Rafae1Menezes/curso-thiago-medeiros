const menu = document.querySelector('.menuMobile')
const botaoMenu = document.querySelector('.botaoMenu')
let flag = false


function abrirOuFecharMenu(){
    if(flag === false){
        menu.classList.add('aberto')
        botaoMenu.innerHTML = 'fechar menu'
        flag = true
    }else{
        menu.classList.remove('aberto')
        botaoMenu.innerHTML = 'abrir menu'
        flag = false
    }
}