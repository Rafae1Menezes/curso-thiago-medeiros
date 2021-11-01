let contador = document.querySelector('#contador')
let botaoPausar = document.querySelector('#botaoPausar')
let count = 0



let intervalo = setInterval(()=>{    
    contador.innerHTML = count
    count++
    }, 500)

function pausar(){
    clearInterval(intervalo)
}

botaoPausar.addEventListener('click',pausar)