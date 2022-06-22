const container = document.getElementById("demo")

async function getCards() {
try {
    const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
    const cards = await resposta.json()
    // console.log(cards[21].title)
    const oursCards = cards.slice(15, 20)
    console.log(oursCards);
    oursCards.map((card) => {
        const section = document.createElement('div')
        section.setAttribute('class', 'card')
        console.log(section)

        const title = document.createElement('h1')
        title.setAttribute('class', 'title')
        title.innerText = card.title

        const director = document.createElement('p')
        director.setAttribute('class', 'director')
        director.innerText = card.director

        const lancamento = document.createElement('p')
        lancamento.setAttribute('class', 'dataLancamento')
        lancamento.innerText = card.release_date

        const description = document.createElement('p')
        description.setAttribute('class', description)
        description.innerText = card.description

        const image = document.createElement('img')
        image.setAttribute('class', 'image')
        image.setAttribute('src', card.image)

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