const numInput = prompt("Digite qual tabuada você quer saber")

if(numInput!==''){
    let num = parseInt(numInput)
    let lista = ''

    for(x=0; x<=10; x++){
        lista += `<li>${x} x ${num} =  ${x * num}</li>`
    }
    
    document.querySelector('#tabuada').innerHTML = lista
}