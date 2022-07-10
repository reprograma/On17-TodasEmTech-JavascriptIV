const container = document.getElementById("demo")

async function getMovies() {
    try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const movies = await response.json()
    // console.log(movies)

    const oursMovies = movies.slice(0, 23)
    console.log(oursMovies);
    oursMovies.map((movie) => {
        const section = document.createElement('div')
        section.setAttribute('class', 'movie')
        console.log(section)

        const title = document.createElement('h1')
        title.setAttribute('class', 'title')
        title.innerText = movie.title

        const director = document.createElement('p')
        director.setAttribute('class', 'director')
        director.innerText = movie.director

        const date = document.createElement('p')
        date.setAttribute('class', 'release_date')
        date.innerText = movie.release_date

        const image = document.createElement('img')
        image.setAttribute('class', 'image')
        image.setAttribute('src', movie.image)

        container.appendChild(section);
        section.appendChild(title)
        section.appendChild(director)
        section.appendChild(date)
        section.appendChild(image)
        })
    }
    catch(err) {
        console.error(err)
    }
}

getMovies()