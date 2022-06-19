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
      <div class="movie">
        <img src="${image}" />
        <h1>${title}</h1>
        <p>Descrição: ${description}</p>
        <p>Director: ${director}</p>
        <p>Produtor: ${producer}</p>
        <p>Lançamento: ${running_time}</p>
        <p>Pontuação: ${rt_score}</p>
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