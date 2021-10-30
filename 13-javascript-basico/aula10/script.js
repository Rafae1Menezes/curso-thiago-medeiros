let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let media = (nota1 + nota2) / 2

mediaMinima = 7

console.log(media)

if(media >= mediaMinima){
    document.write('Ok, você passou de ano')
}else{
    document.write('Ops, não passou de ano')
}

document.write('<br>')

if(media >= mediaMinima && media === 100){
    document.write('NOssa! Você foi exelente!')
}else if (mediaMinima >= mediaMinima && media === 9){
    document.write('Você mandou muito bem, vamos tentar chegar no 10')
}