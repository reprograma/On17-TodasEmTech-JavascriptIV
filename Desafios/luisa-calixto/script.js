const sectionContainer = document.querySelector(".section_container");

async function getFilms() {
  try {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const films = await response.json();
    return renderFilms(films);
  } catch (err) {
    console.error(`ERROR: ${err}`);
  }
}

function renderFilms(films) {
  films.map((film) => {
    const divCard = document.createElement("div");
    divCard.className = "div_card";

    const title = document.createElement("h2");
    title.className = "title_container";
    title.innerText = film.title;

    const image = document.createElement("img");
    image.className = "container_imagem";
    image.setAttribute("src", film.image);

    const director = document.createElement("p");
    director.className = "director_container";
    director.innerText = `Director: ${film.director}`;

    const year = document.createElement("p");
    year.className = "year_container";
    year.innerText = `Release date: ${film.release_date}`;

    sectionContainer.appendChild(divCard);
    divCard.appendChild(image);
    divCard.appendChild(title);
    divCard.appendChild(year);
    divCard.appendChild(director);
  });
}

getFilms();
