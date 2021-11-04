const media = 7

const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7
    },
    {
        nome: 'Rafael',
        sobrenome: 'menezes',
        nota: 5
    },  
]

const alunosAprovados = alunos.filter((aluno)=>{
    return (aluno.nota >=7) ? true : false
})

console.log(alunosAprovados)