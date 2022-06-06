function generateCardHtml({ image, title }) {
  return `
    <div class="movie">
      <h1>${title}</h1>
      <img src="${image}" />
    </div>
  `;
}

async function getMovies(url) {
  try {
    const resposta = await fetch(url);
    const movies = await resposta.json();
    return movies;
  } catch (err) {
    console.error("HTTP Error: " + err);
  }
}

function renderMovies(movies, container) {
      for (const movie of movies) {
    const li = document.createElement("li");
    li.classList.add("movie-container");
    li.innerHTML = generateCardHtml(movie);
    container.appendChild(li);
  }
}

(async () => {
  const url = "https://ghibliapi.herokuapp.com/films";
  const container = document.querySelector(".movies");
  getMovies(url).then((movies) => renderMovies(movies, container));
})();
