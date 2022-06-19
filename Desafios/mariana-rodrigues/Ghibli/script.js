const container = document.getElementById("movie")

async function getMovie() {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const cards = await response.json()
        //console.log(cardGlibhi)

        const cardGlibhi = cards
        console.log(cardGlibhi);

        cardGlibhi.map((card) => {
            const section = document.createElement('div')
            section.setAttribute('class', 'card')

            const title = document.createElement('h2')
            title.setAttribute('class', 'title')
            title.innerText = card.title

            const year = document.createElement('p')
            year.setAttribute('class', 'year')
            year.innerText = card.release_date

            const director = document.createElement('p')
            director.setAttribute('class', 'director')
            director.innerText = card.director;

            const description = document.createElement('p')
            description.setAttribute('class', 'description')
            description.innerText = card.description

            const image = document.createElement('img')
            image.setAttribute('class', 'image')
            image.setAttribute('src', card.image)

            container.appendChild(section);
            section.appendChild(image);
            section.appendChild(title)
            section.appendChild(director)
            section.appendChild(year)
            section.appendChild(description)

        })

    }
    catch(err) { 
        console.error(err)
    }

}

getMovie()
