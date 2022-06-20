const url = "https://ghibliapi.herokuapp.com/films";
const cardContainer = document.querySelector(".cards_container");

/* CRIAR UMA FUNÇÃO PARA PREENCHER OS CARDS */

async function getMovie() {
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);


        data.map((films) => {

            const div = document.createElement("div"); // Criando o elemento no html
            div.className = "card"; // Criando um nome para o elemenro no html
            cardContainer.appendChild(div); // Adotando esse elemento (Container adota a div)

            const card_image = document.createElement('img')
            card_image.className = "card_image";
            card_image.setAttribute("src", films.image)
            div.appendChild(card_image)

            const titulo = document.createElement("h2");
            titulo.className = "card_h2";
            titulo.innerText = `${films.title}`;
            div.appendChild(titulo);

            const titulo2 = document.createElement("h3");
            titulo2.className = "card_h3";
            titulo2.innerText = `${films.original_title}`;
            div.appendChild(titulo2);

            const description = document.createElement("p");
            description.className = "description";
            description.innerText = `${films.description}`;
            div.appendChild(description);

            const director = document.createElement("p");
            director.className = "director";
            director.innerText = `Director: ${films.director}`;
            div.appendChild(director);

            const producer = document.createElement("p");
            producer.className = "producer";
            producer.innerText = `Produtor: ${films.producer}`;
            div.appendChild(producer);

            const release_date = document.createElement("p");
            release_date.className = "producer";
            release_date.innerText = `Data de lançamento: ${films.release_date}`;
            div.appendChild(release_date);
        });

    } catch (erro) {
        console.log("HTTP-Error: " + erro);
    }
}
getMovie()



/* document.querySelector(".cards_container")
.addEventListener("wheel", event => {
    console.log(event)

    if(event.deltaY > 0){
       event.target.scrollBy(300, 0)
    } else{
        event.target.scrollBy(-300, 0)
    }
}) */




/* let particules = []

for(i = 0; i < 300; i++){
    let particule = document.createElement('span')
    particule.className = 'snow snow-anim'
    particule.style.setProperty('left', Math.random() * 100 +'%');
    particule.style.setProperty('opacity', Math.random() * 0.8 + 0.2);
    particule.style.setProperty('--time-swing', Math.random() * 2 + 2 +'s');
    particule.style.setProperty('--delay', Math.random() * 14 +'s');
    particule.style.setProperty('--size', Math.random() * 3 + 4 + 'px');
    document.body.append(particule)
    particules.push(particule)
}

function onWindowResize() {
    n_particules = window.innerWidth * window.innerHeight / 6400
    console.log(n_particules)
    particules.forEach(function (p, index) {
        p.style.setProperty('--time-drop', (Math.random() * 5 + 9) * (window.innerHeight / 1000) + 's');
        if(index > n_particules){
            p.style.setProperty('visibility','hidden')
        }
        else{
            p.style.setProperty('visibility','visible')
        }
    });
}

window.onresize = onWindowResize;
onWindowResize()
 */