// Utilize o `fetch()` para realizar uma requisição ao endpoint https://ghibliapi.herokuapp.com/films da [Studios Ghibli API]
// (https://ghibliapi.herokuapp.com/) e popule a página que
// também será criados por vocês (HTML e CSS) com os dados do json que é a lista com todos os filmes da Ghibli (22);

const container = document.getElementById("main");

async function getMovies() {
  try {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const movies = await response.json();
    renderMovies(movies);
  } catch (err) {
    console.log(`ERROR: `, err);
  }
}

async function renderMovies(movies) {
  console.log(movies);
  movies.map((movie) => {
    const section = document.createElement("div");
    section.setAttribute("class", "card");

    const title = document.createElement("h2");
    title.innerHTML = movie.title;

    const image = document.createElement("img");
    image.setAttribute("src", movie.image);

    const director = document.createElement("p");
    director.innerHTML = `<b>Diretor</b>: ${movie.director}`;

    const date = document.createElement("p");
    date.innerHTML = `<b>Ano de lançamento</b>: ${movie.release_date}`;

    container.appendChild(section);
    section.appendChild(image);
    section.appendChild(title);
    section.appendChild(director);
    section.appendChild(date);
  });
}

getMovies();
