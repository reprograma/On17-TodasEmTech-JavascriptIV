async function acessarSite() {
    let endpoint = "https://ghibliapi.herokuapp.com/films";
    let resposta = await fetch(endpoint);
    let dados = await resposta.json();
    const cardList = dados.slice(1, 5);
    createCards(cardList);
}

function createCards(dataList) {
    for (const film of dataList) {

        let cardOriginal = document.querySelector("template").content.firstElementChild;
        let cardNew = document.createElement("section");
        cardNew.classList.add("film");
        cardNew.innerHTML = cardOriginal.innerHTML;

        document.body.appendChild(cardNew);

        let filmImagem = cardNew.querySelector(".imagem");
        let filmTitulo = cardNew.querySelector(".titulo");
        let filmAno = cardNew.querySelector(".ano");
        let filmDiretor = cardNew.querySelector(".diretor");
        let filmDescricao = cardNew.querySelector(".description");

        filmImagem.lastElementChild.src = film.image;
        filmTitulo.lastElementChild.textContent = film.title;
        filmAno.lastElementChild.textContent = film.release_date;
        filmDiretor.lastElementChild.textContent = film.director;
        filmDescricao.lastElementChild.textContent = film.description;
    }
}

acessarSite();