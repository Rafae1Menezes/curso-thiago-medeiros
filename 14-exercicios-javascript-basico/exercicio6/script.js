let listaAtores = [
   {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
   },
   {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
   },
   {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início',
   },
]

let cards = ''

for (const ator of listaAtores) {
    cards += `
        <div class="card">
            <h2>${ator.nome}</h2>
            <span>Intepreta o persona ${ator.personagem} no filme ${ator.filme}.</span>
        </div>`
}

document.querySelector('.container').innerHTML = cards