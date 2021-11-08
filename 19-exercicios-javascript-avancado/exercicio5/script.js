function missao(){
    return new Promise((resove, reject)=>{
        setTimeout(()=>resove('ok, missão concluída'),10000)
    })
}

missao().then(msg => console.log(msg))