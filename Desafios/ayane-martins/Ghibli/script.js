const container = document.getElementById("container_card")

async function getCards() {
    try { 
        const resposta = await fetch ('https://ghibliapi.herokuapp.com/films')
        const cards = await resposta.json()

        const cartoes = cards.slice(0,22)
        cartoes.map((cards) => {

            const section = document.createElement ('div')
            section.setAttribute( 'class', 'div')
            console.log(section)

            const title = document.createElement ('h1')
            title.setAttribute ('class', 'titulo')
            title.innerText = cards.title

            const director = document.createElement ('p')
            director.setAttribute ('class', 'diretor')
            title.innerText = cards.director

            const description = document.createElement ('p')
            description.setAttribute ('class', 'descricao')
            description.innerText = cards.description

            const image = document.createElement ('img')
            image.setAttribute ('class', 'imagem')
            image.setAttribute ('src', cards.image) 

            container.appendChild(section)
            section.appendChild(image)
            section.appendChild(title)
            section.appendChild(director)
            section.appendChild(description)

          })

    } 
    catch (err) {
        console.error(err)
    }
}
getCards()

