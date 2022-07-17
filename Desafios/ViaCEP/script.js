async function handleClick(event) {
    let cepNum = document.querySelector(".cep-input").value;
    let cepDados = await fetch(`https://viacep.com.br/ws/${cepNum}/json/`);
    cepDados = await cepDados.json();
    console.log(cepDados);
    preencherDados(cepDados);
}

function preencherDados(cepDados) {
    let cepCard = document.createElement("div");
    let resultsDiv = document.querySelector('.results');
    resultsDiv.appendChild(cepCard);

    cepCard.innerHTML =
    `
    <div class="cep-card">
        <div><h6> CEP: </h6><p class="value-text">${cepDados.cep}</p></div>
        <div><h6> Logradouro: </h6><p class="value-text">${cepDados.logradouro}</p></div>
        <div><h6> Bairro: </h6><p class="value-text">${cepDados.bairro}</p></div>
        <div><h6> Cidade: </h6><p class="value-text">${cepDados.localidade}</p></div>
        <div><h6> Estado: </h6><p class="value-text">${cepDados.uf}</p></div>
        <div><h6> Complemento: </h6><p class="value-text">${cepDados.complemento}</p></div>
        <div><h6> DDD: </h6><p class="value-text">${cepDados.ddd}</p></div>
    </div>
    `;

}