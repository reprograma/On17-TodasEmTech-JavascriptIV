const container = document.getElementById('Ghibli')

async function getCards(){
    try{
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const cards = await response.json()
        // console.log(cards [0])
        const oursCards = cards.slice(0, 4)
        console.log(oursCards);
        oursCards.map((card) => {
            const section = document.createElement('div')
            section.setAttribute('class', 'card')

            const title = document.createElement('h1')
            title.setAttribute('class', 'title')
            title.innerText = card.title

            const date = document.createElement('date')
            date.setAttribute('class', 'date')
            date.innerText = card.date

            const director = document.createElement(director)
            director.setAttribute('class', 'director')
            director.innerText = card.director

            const description = document.createElement(description)
            description.setAttribute('class', 'description')
            description.innerText = card.description

            const image = document.createElement ('img')
            image.setAttribute('class', 'image')
            image.setAttribute('src', card.image[0].image_url)

            container.appendChild(section);
            section.appendChild(image);
            section.appendChild(title);
            section.appendChild(date);
            section.appendChild(director);
            section.appendChild(description);

        })

    }
    catch(err){
        console.error(err)
    }
}
getCards()