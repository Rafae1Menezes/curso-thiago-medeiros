/* 

SINCRONO vs  ASSINCRONO

*/

function primeira() {
    console.log('primeira')
}

function segunda(){
    console.log('segunda')
}

setTimeout(primeira,2000) // esse é um código assincrono
segunda()