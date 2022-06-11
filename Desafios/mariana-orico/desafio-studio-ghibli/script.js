async function getData() {
    const container = document.getElementById("index")
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'default'
        })
        const data = await response.json()
        data.slice(0, 20).map((filme) => {

            const card = document.createElement('div')
            const imagemFilme = document.createElement('img')
            imagemFilme.className = 'imagem'
            imagemFilme.setAttribute('src', filme.image)
            const titulo = document.createElement('h2')
            titulo.className = 'titulo'
            titulo.innerText = filme.title

            card.appendChild(imagemFilme)
            card.appendChild(titulo)
            container.appendChild(card)

        })

    }
    catch (erro) {
        console.log("Error: " + erro);
    }
}
getData()