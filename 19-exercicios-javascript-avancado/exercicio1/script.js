const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva'
    },
    {
        nome: 'José',
        sobrenome: 'Moreira'
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique'
    },
    {
        nome: 'Rafael',
        sobrenome: 'menezes'
    },  
]



const novosAlunos = alunos.map((aluno)=>{
    return aluno.nome + ' ' + aluno.sobrenome
})

console.log(novosAlunos)