const container = document.getElementById("demo")

async function getCards() {
try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const cards = await response.json()
    
    const oursCards = cards.slice(0, 20)
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

        const date = document.createElement('p')
        date.setAttribute('class', 'releaseDate')
        date.innerText = card.release_date

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
        section.appendChild(date)
        section.appendChild(description)


    })
}
catch(err) {
    console.error(err)
}
}
getCards()