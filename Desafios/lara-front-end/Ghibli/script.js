const container = document.querySelector('.container')
console.log(container)

async function addCards() {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const allCards = await response.json()
        const someCards = allCards.slice(1, 4)
        //console.log(allCards)
        
        allCards.map((cards) => {

            const content = document.createElement('div')
            content.setAttribute('class', 'content')
            console.log(content)

            const imgDiv = document.createElement('div')
            imgDiv.setAttribute('class', 'img-div')

            const cardImg = document.createElement('img')
            cardImg.setAttribute('class', 'card-img')
            cardImg.setAttribute('src', cards.image)
            //console.log(imgDiv)

            const title = document.createElement('h2')
            title.setAttribute('class', 'text-infos')
            title.innerText = cards.title
            //console.log(title)

            const originalTitle = document.createElement('h3')
            originalTitle.setAttribute('class', 'text-infos')
            originalTitle.innerText = cards.original_title
            //console.log(originalTitle)

            const romanisedTitle = document.createElement('h4')
            romanisedTitle.setAttribute('class', 'text-infos')
            romanisedTitle.innerText = cards.original_title_romanised

            const releaseDate = document.createElement('h3')
            releaseDate.setAttribute('class', 'text-infos')
            releaseDate.innerText = cards.release_date

            container.appendChild(content)
            content.appendChild(releaseDate)
            content.appendChild(imgDiv)
            content.appendChild(title)
            content.appendChild(originalTitle)
            content.appendChild(romanisedTitle)
            imgDiv.appendChild(cardImg)     
        })
    } 
    catch(erro) {
        
    }
}

addCards()

