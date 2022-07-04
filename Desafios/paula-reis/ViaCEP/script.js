//Utilize o `fetch()` para realizar uma requisição ao endpoint https://viacep.com.br/ws/${cep}/json/ da
//[ViaCEP API](https://viacep.com.br/) permitindo que a usuária forneça um CEP e popule a página que também será criados por vocês (HTML e CSS) com os os dados
// (logradouro, bairro, localidade e uf) do json que é a objeto com todas as informações do CEP fornecido;

const cep = prompt("Por gentileza, informe seu CEP: ");
const container = document.getElementById("main");

async function getCep() {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderCard(data);
  } catch (err) {
    alert(`CEP inválido, tente novamente!`);
    document.location.reload(true);
  }
}

async function renderCard(data) {
  const section = document.createElement("div");
  section.setAttribute("class", "card");

  const title = document.createElement("h1");
  title.innerText = "Consulta de CEP";

  const cep = document.createElement("p");
  cep.innerHTML = `<b>CEP:</b> ${data.cep}`;

  const logradouro = document.createElement("p");
  logradouro.innerHTML = `<b>Logradouro:</b> ${data.logradouro}`;

  const bairro = document.createElement("p");
  bairro.innerHTML = `<b>Bairro:</b> ${data.bairro}`;

  const localidade = document.createElement("p");
  localidade.innerHTML = `<b>Localidade:</b> ${data.localidade}`;

  const uf = document.createElement("p");
  uf.innerHTML = `<b>UF:</b> ${data.uf}`;

  container.appendChild(section);
  section.appendChild(title);
  section.appendChild(cep);
  section.appendChild(logradouro);
  section.appendChild(bairro);
  section.appendChild(localidade);
  section.appendChild(uf);
}

getCep();
