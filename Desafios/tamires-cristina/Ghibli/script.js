const sectionContainer = document.querySelector(".section_container");

async function getFilms() {
  try {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const films = await response.json();

    films.map((film) => {
      const divContainer = document.createElement("div");
      divContainer.className = "div_container";

      const title = document.createElement("h1");
      title.className = "title_container";
      title.innerText = film.title;

      const description = document.createElement("p");
      description.className = "description_container";
      description.innerText = film.description;

      const image = document.createElement("img");
      image.className = "container_imagem";
      image.setAttribute("src", film.image);

      const director = document.createElement("p");
      director.className = "director_container";
      director.innerText = film.director;

      const year = document.createElement("p");
      year.className = "year_container";
      year.innerText = film.release_date;

      sectionContainer.appendChild(divContainer);
      divContainer.appendChild(image);
      divContainer.appendChild(title);
      divContainer.appendChild(description);
      divContainer.appendChild(year);
      divContainer.appendChild(director);
    });
  } catch (err) {
    console.error(err);
  }
}

getFilms();
