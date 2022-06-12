const container = document.getElementById("cards-container")

async function getCards() {

    try {
        const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
        const cards = await resposta.json()

        const cartoes = cards.slice(0, 22)
        cartoes.map((card) => {

        const section = document.createElement('div')
        section.setAttribute('class', 'div')
        console.log(section)

        const image = document.createElement('img')
        image.setAttribute('class', 'image')
        image.setAttribute('src', card.image)

        const title = document.createElement('h1')
        title.setAttribute('class', 'titulo')
        title.innerText = card.title

        const director = document.createElement('p')
        director.setAttribute('class', 'director')
        director.innerText = card.director

        const lancamento = document.createElement('p')
        lancamento.setAttribute('class', 'dataLancamento')
        lancamento.innerText = card.release_date

        const tituloPrincipal = document.getElementById("titulo-principal")
        tituloPrincipal.innerText

        tituloPrincipal.appendChild(container)
        container.appendChild(section)
        section.appendChild(image)
        section.appendChild(title)
        section.appendChild(director)
        section.appendChild(lancamento)

        })
    }
    catch(err) {
    console.error(err)
    }
}
getCards()