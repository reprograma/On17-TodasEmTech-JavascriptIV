const card = document.getElementById("container");

async function getGhibli() {
  try {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const movie = await response.json();
    return infoMovieCard(movie);
  } catch (err) {
    console.error("HTTP Error: " + err);
  }
}
function infoMovieCard(movie) {
  
  movie.forEach((dataMovie) => {
    //construção do card
    const divContainer = document.createElement("div");
    divContainer.classList.add("card-container");
    card.appendChild(divContainer);

    //aparecer imagem
    const image = document.createElement("img");
    image.setAttribute("src", dataMovie.image);
    image.classList.add("photography");
    divContainer.appendChild(image);

    //aparecer título
    const titleMovie = document.createElement("p");
    titleMovie.classList.add("title");
    titleMovie.innerHTML = `<b class = textStrong>Título:</b> ${dataMovie.title}`;
    divContainer.appendChild(titleMovie);

    //aparecer nome original
    const originalTitleMovie = document.createElement("p");
    originalTitleMovie .classList.add("title");
    originalTitleMovie .innerHTML = `<b class = textStrong>Título original:</b> ${dataMovie.original_title}`;    
    divContainer.appendChild(originalTitleMovie );

    //aparecer ano do filme
    const yearMovie = document.createElement("p");
    yearMovie.classList.add("title");
    yearMovie.innerHTML = `<b class = textStrong>Título:</b> ${dataMovie.release_date}`;
    divContainer.appendChild(yearMovie);
  });
}

getGhibli();
