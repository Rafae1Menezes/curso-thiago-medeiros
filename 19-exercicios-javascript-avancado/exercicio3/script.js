const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9]
}

const total = aluno.notas.reduce((acc, curr)=>{
    return acc + curr
})

const media = (total / aluno.notas.length).toFixed(1)

console.log(`A média da Maria foi ${media} em um total de ${aluno.notas.length} bimestres`)