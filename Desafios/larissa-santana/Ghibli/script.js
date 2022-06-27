const container = document.getElementById("container");
const url = "https://ghibliapi.herokuapp.com/films";

async function buscarFilmes() {
  try {
    const resposta = await fetch(url); //vai na linha 3 e traga meu valor. (fetch=buscar)
    const dadosJson = await resposta.json(); //a resposta da linha 9, salva em json
    renderizarFilmes(dadosJson);
  } catch (err) {
    console.error("HTTP Error: " + err);
  }
}
//renderizar resposta para aparecer no html, o que eu quero qeu o usurario veja
function renderizarFilmes(calagosFilmes) {
  calagosFilmes.map((conteudo) => {
    const card = document.createElement('div')
    card.setAttribute('id', 'card')


    const titulo = document.createElement("h2")
    titulo.innerHTML = conteudo.title;
    titulo.style.color = 'rgb(241, 236, 236)';
    titulo.style.textAlign = 'center';
    titulo.style.fontFamily = 'sans-serif';

    const imagem = document.createElement("img");
    imagem.setAttribute("src", conteudo.image);
    

    const diretor = document.createElement("p");
    diretor.innerHTML = `<b>Diretor</b>: ${conteudo.director}`;

    const ano = document.createElement("p");
    ano.innerHTML = `<b>Ano de lançamento</b>: ${conteudo.release_date}`

    const pontuacao = document.createElement("p");
    pontuacao.innerHTML = `<b>Pontuação</b>: ${conteudo.rt_score}`

    container.appendChild(card);
    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(diretor);
    card.appendChild(ano);
    card.appendChild(pontuacao);
    
  });
}



buscarFilmes();
renderizarFilmes();



/* modelo bah 
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

getMovies(url).then((movies) => renderMovies(movies, container))


*/