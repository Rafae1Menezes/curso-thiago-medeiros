let idade = prompt('Digite sua idade')

if(idade >= 18){
    document.write('ok, você é maior de idade')
}else if (idade == 15){
    document.write('você tem 15 anos')
}else{
    document.write('voce não pode acessar')
}



let nome = prompt('Digite seu nome')

if(nome === 'Rafaek' || nome === 'rafaek'){
    document.write('Seja bem-vindo Rafael')
}else{
    document.write('Voce não tem acesso de Adminstrador')
}