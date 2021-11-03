/* 

LOCAL STOREGE

*/

//gravar
localStorage.setItem('tarefa', 'estudar javascript')

//acesar
const valor = localStorage.getItem('tarefa')
console.log(valor)


//outro teste

const tarefas = [
    {tarefa: 'estudar js'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)
localStorage.setItem('tarefas',tarefasJson)

const listaTarefasSalvas = localStorage.getItem('tarefas')
const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)