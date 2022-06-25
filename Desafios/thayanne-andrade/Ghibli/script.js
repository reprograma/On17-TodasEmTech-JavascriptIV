const container = document.getElementById('demo');

async function getInfo() {
    try {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        const data = await response.json();
        showInfo(data);
    }
    catch(erro) {
        console.log(erro);
    }
}

function showInfo(data) {
    const dados = data.map(function(movie, indice){
        return `
        <div class="card">
             <img class="image" src=${movie.movie_banner}>
             <h3>${movie.title}</h3>
             <p class="card__text"><strong>Director:</strong> ${movie.director}</p>
             <p class="card__text"><strong>Release Date:</strong> ${movie.release_date}</p>
             <p class="card__text"><strong>Description:</strong> ${movie.description}</p>
         </div>
         `
    });

    container.innerHTML = dados.join('');
}


getInfo();