const container = document.getElementById("cards-container")


async function getCards() {
    try {
        const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
        const cards = await resposta.json()

        const cartoes = cards.slice(1, 22)
        cartoes.map((card) => {

        const section = document.createElement('div')
        section.setAttribute('class', 'div')
        console.log(section)

        const title = document.createElement('h1')
        title.setAttribute('class', 'titulo')
        title.innerText = card.title

        const director = document.createElement('p')
        director.setAttribute('class', 'diretor')
        director.innerText = card.director

        const lancamento = document.createElement('p')
        lancamento.setAttribute('class', 'lancamento')
        lancamento.innerText = card.release_date

        const description = document.createElement('p')
        description.setAttribute('class', 'descricao')
        description.innerText = card.description

        const image = document.createElement('img')
        image.setAttribute('class', 'imagem')
        image.setAttribute('src', card.image)

        const tituloPrincupal = document.getElementById("titulo-principal")
        tituloPrincupal.innerText

        tituloPrincupal.appendChild(container)
        container.appendChild(section)
        section.appendChild(image)
        section.appendChild(title)
        section.appendChild(director)
        section.appendChild(lancamento)
        section.appendChild(description)


        })
    }
    catch(err) {
    console.error(err)
    }
}
getCards()


