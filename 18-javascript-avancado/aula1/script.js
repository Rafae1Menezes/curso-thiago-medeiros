/* 

GLOBAL
LOCAL

- O ESCOPO DETERMINA A VISIBILIDAD DE UMA VARIAVEL
- AS FUNÇÕS DO JS CRIAM O SEU PRÓPRIO ESCOPO
- AS VARIÁVEIS DE UMA FUNÇÃO NÃO SÃO ACESSÍVEIS FORA DELA


*/

function teste (){
    let a = 123
    b = 546 //coloca no escopo global, não recomendado
}
console.log(a) //a variável não existe fora da função

teste()