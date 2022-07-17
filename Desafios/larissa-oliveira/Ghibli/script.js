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
  const divTituloSite = document.createElement("div");
  divTituloSite.setAttribute("class", "div-titulo");
  container.appendChild(divTituloSite);

  const tituloSite = document.createElement("h1");
  tituloSite.innerHTML = " Studio Ghibi";
  tituloSite.setAttribute("class", "titulo-site");
  divTituloSite.appendChild(tituloSite);

  catalogo.map((filme) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);

    const titulo = document.createElement("h2");
    titulo.setAttribute("class", "titulo");
    titulo.innerText = filme.title;
    card.appendChild(titulo);

    const imagem = document.createElement("img");
    imagem.setAttribute("src", filme.image);
    card.appendChild(imagem);

    const ano = document.createElement("p");
    ano.innerHTML = `<b>Ano de lançamento: </b> ${filme.release_date}`;
    card.appendChild(ano);

    const diretor = document.createElement ("p");
    diretor.innerHTML = `<b> Diretor: </b> ${filme.director}`;
    card.appendChild(diretor);


    const descricao = document.createElement ("p");
    descricao.setAttribute("class", "descricao");
    descricao.innerHTML = `<b> Descrição: </b> ${filme.description}`;
    card.appendChild(descricao);



  });

  const footer = document.createElement("div");
  footer.setAttribute("class", "footer");
  container.appendChild(footer);

  const textoFooter = document.createElement("p");
  textoFooter.innerHTML = "Criado por Larissa Oliveira";
  textoFooter.setAttribute("class", "texto-footer");
  footer.appendChild(textoFooter);

}

buscarFilmes();
//renderizarFilmes();
