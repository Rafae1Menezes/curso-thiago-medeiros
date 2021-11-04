const alunos =[
    {
        nome:'Maria',
        sobrenome:'daSilva',
        nota:10,
    },
    {
        nome:'José',
        sobrenome:'Moreira',
        nota:4,
    },
    {
        nome:'Paulo',
        sobrenome:'Henrique',
        nota:7,
    },
    {
        nome:'Sara',
        sobrenome:'Souza',
        nota:5,
    },
    {
        nome:'Clara',
        sobrenome:'Barbosa',
        nota:9,
    },
    {
        nome:'Rodrigo',
        sobrenome:'Barros',
        nota:4,
    },
    {
        nome:'Renato',
        sobrenome:'Barros',
        nota:7,
    },
    {
        nome:'Andrea',
        sobrenome:'Batista',
        nota:6,
    },
    {
        nome:'Carla',
        sobrenome:'Campos',
        nota:3,
    },
]

const $botaoFiltrar = document.querySelector('#buttonFiltrar')
const $lista = document.querySelector('#lista')
const $inputNota = document.querySelector('#inputNota')




function criaLista(alunos){
    let html = ''

    if(alunos.length){
        alunos.forEach((aluno)=>{
            html += `<li>${aluno.nome} | Nota: ${aluno.nota}</li>`
        })
    }
    else{
        html = 'Nenhum Aluno tirou essa nota'
    }
    $lista.innerHTML = html
}


$botaoFiltrar.onclick = () => {

    if($inputNota.value){
        const nota = parseInt($inputNota.value)

        const filtrados = alunos.filter((aluno)=>{
            return aluno.nota === nota ? true : false
        })    
        criaLista(filtrados)
    }else{
        $lista.innerHTML = "Campo Vazio"
    }
    
}