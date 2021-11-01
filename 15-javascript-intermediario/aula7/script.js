let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')
let tarefa




botaoCadastrar.onclick = () => {
    tarefa = document.querySelector('#tarefa').value

    toast.innerHTML = `Tarefa "${tarefa}"" cadastrada com sucesso!`

    toast.classList.add('visible')

    setTimeout(()=>{
        toast.classList.remove('visible')
    }, 5000)
}