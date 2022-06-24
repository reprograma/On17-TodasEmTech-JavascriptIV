const cepPrompt = prompt("Insira o seu cep:");
const url = `https://viacep.com.br/ws/${cepPrompt}/json/`;
const container = document.getElementById("endereco");

function generateCardHtml({ cep, logradouro, bairro, localidade, uf }) {
  return `
        <div class="cep">
          <p class = "text" >CEP: ${cep} </p>
          <p class = "text">Logradouro: ${logradouro}</p>
          <p class = "text">Bairro: ${bairro}</p>
          <p class = "text">Localidade: ${localidade}</p>
          <p class = "text">UF: ${uf}</p>
        </div>
      `;
}

async function getCep(url) {
  try {
    const resposta = await fetch(url);
    const data = await resposta.json();
    container.innerHTML = generateCardHtml(data);
  } catch (err) {
    console.error("HTTP Error: " + err);
  }
}

getCep(url);
