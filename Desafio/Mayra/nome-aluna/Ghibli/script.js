const container = document.querySelector ('#container')

async function getCards() {
  try{
    const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
    const filmes = await resposta.json()
    console.log (filmes)

      const cards = document.createElement('div')
      cards.setAttribute('class','cards')

      const title = document.createElement('h1')
      title.setAttribute('class','title')
      title.innerText = filmes.title

      const anoDoFilme = document.createElement('p')
      anoDoFilme.setAttribute('class','anoDoFilme')
      anoDoFilme.innerText = filmes.release_date

      const diretor = document.createElement('p')
      diretor.setAttribute('class','diretor')
      diretor.innerText = filmes.director
      
      const imagem = document.createElement('img')
      imagem.setAttribute('class','imagem')
      imagem.setAttribute('src', filmes.image)

}
  catch(err){

    console.error(err)
}
}
getCards()