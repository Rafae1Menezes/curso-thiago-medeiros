let botao = document.querySelector('#botaoTeste')

/* botao.onclick = ()=>{
    alert()
} */

function msg(){
    console.log('mensagem 1')
    botao.removeEventListener('click', msg)
}

botao.addEventListener('click', msg)
