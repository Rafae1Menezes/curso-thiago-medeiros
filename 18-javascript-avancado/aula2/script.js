/* 

HOISTING (IÇAR, ERGUER)

HOISTING e o comportamento padrão do javascript de mover as 
declarações paara o topo de um escopo

Toda declaração é movida para o topo do escopo 

*/

function teste(){
    function outraFuncao(){
        console.log('ok sou a outra funcao')
    }

    outraFuncao() //poderia ficar no topo do escopo, mas não é indicado
}