const section = document.querySelector(".section");
console.log(section);
const userCep = prompt("Digite seu cep");

getCep(userCep);

async function getCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    renderCep(data);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function renderCep(data) {
  const div = document.createElement("div");
  div.className = "div_section";

  const logradouro = document.createElement("p");
  logradouro.innerText = `Rua: ${data.logradouro}`;

  const bairro = document.createElement("p");
  bairro.innerText = `Bairro: ${data.bairro}`;

  const localidade = document.createElement("p");
  localidade.innerText = `Cidade: ${data.localidade}`;

  const unidadeFederativa = document.createElement("p");
  unidadeFederativa.innerText = `UF: ${data.uf}`;

  section.appendChild(div);
  div.appendChild(logradouro);
  div.appendChild(bairro);
  div.appendChild(localidade);
  div.appendChild(unidadeFederativa);
}
