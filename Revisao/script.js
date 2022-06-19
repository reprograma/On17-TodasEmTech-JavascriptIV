const container = document.getElementById("demo")

async function getCards() {
    try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        const cards = await response.json()
        //console.log(cards)
        //console.log(cards.data[25])
        const oursCards = cards.data.slice(105, 110)
        console.log(oursCards)
        oursCards.map((card) => {
            const section = document.createElement('div')
            section.setAttribute('class', 'card')

            const title = document.createElement('h1')
            title.setAttribute('class', 'title')
            title.innerText = card.name

            const type = document.createElement('p')
            type.setAttribute('class', 'type')
            type.innerText = card.type

            const paragraph = document.createElement('p')
            paragraph.setAttribute('class', 'description')
            paragraph.innerText = card.desc

            const image = document.createElement('img')
            image.setAttribute('class', 'image')
            image.setAttribute('src', card.card_images[0].image_url)
        
            container.appendChild(section);
            section.appendChild(image);
            section.appendChild(title);
            section.appendChild(type);
            section.appendChild(paragraph)
        })

    }
    catch(err) {
        console.error(err)
    }
}

getCards()
