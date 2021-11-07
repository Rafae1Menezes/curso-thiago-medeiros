function missao(){
    return new Promise((resove, reject)=>{
        setTimeout(resove,10000)
    })
}

const promessa = missao()

function imprime(){
    console.log('oi')
}


promessa.then(imprime)