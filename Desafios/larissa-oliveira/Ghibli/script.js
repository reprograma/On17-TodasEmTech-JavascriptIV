const container = document.getElementById("container");
const site = "https://ghibliapi.herokuapp.com/films";

async function buscarFilmes() {
  try {
    const resposta = await fetch(site); // resposta - procura infos no site
    const catalogo = await resposta.json(); //filmes -  os dados do site e transforma em jason
    renderizarFilmes(catalogo);
  } catch (err) {
    console.error("HTTP Error: " + err);
  }
}
function renderizarFilmes(catalogo) {
  catalogo.map((filme) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    const titulo = document.createElement("h2");
    titulo.innerText = filme.title;
    card.appendChild(titulo);

    const imagem = document.createElement("img");
    imagem.setAttribute("src", filme.image);
    card.appendChild(imagem);

    const ano = document.createElement("p");
    ano.innerHTML = `<b>Ano de lançamento: </b> ${filme.release_date}`;
    card.appendChild(ano);
  });
}

buscarFilmes();
//renderizarFilmes();
