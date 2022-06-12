function generateCardHtml({
  image,
  title,
  description,
  director,
  producer,
  running_time,
  rt_score,
}) {
  return `
    <div class="card">
      <img src="${image}" />
      <div class = "info-card">
      <h2>${title}</h2>
      <p><span>Descrição:</span> ${description}</p>
      <p><span>Director:</span> ${director}</p>
      <p><span>Produtor:</span> ${producer}</p>
      <p><span>Lançamento:</span> ${running_time}</p>
      <p><span>Pontuação:</span> ${rt_score}</p>
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

(() => {
  const url = "https://ghibliapi.herokuapp.com/films";
  const container = document.querySelector(".movies");
  getMovies(url).then((movies) => renderMovies(movies, container));
})();
