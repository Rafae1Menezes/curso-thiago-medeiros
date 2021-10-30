let diaSemana = new Date().getDay()
let nomeDiaSemana

switch(diaSemana){
    case 0:
        nomeDiaSemana = 'Domingo'
        break;
    case 1:
        nomeDiaSemana = 'Segunda'
        break;
    case 2:
        nomeDiaSemana = 'Terça'
        break;
    case 3:
        nomeDiaSemana = 'Quarta'
        break;
    case 4:
        nomeDiaSemana = 'Quinta'
        break;
    case 5:
        nomeDiaSemana = 'Sexta'
        break;
    case 6:
        nomeDiaSemana = 'Sábado'
        break;    
}

document.write(`Hoje é ${nomeDiaSemana}`)