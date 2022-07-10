const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", eventClick);

function eventClick(event){
  event.preventDefault();
  buscaCEP(input.value);
  form.reset()
}

async function buscaCEP(cep){
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const cepJSON = await response.json()

  const endereco = document.createElement("ul");
  document.body.insertBefore(endereco, form.nextSibling);
  const rua = document.createElement("li");
  endereco.appendChild(rua)
  const complemento = document.createElement("li");
  endereco.appendChild(complemento);
  const bairro = document.createElement("li");
  endereco.appendChild(bairro);
  const cidade = document.createElement("li");
  endereco.appendChild(cidade);
  const estado = document.createElement("li");
  endereco.appendChild(estado);

  rua.innerText = `Rua: ${cepJSON.logradouro}`;
  complemento.innerText = `Complemento: ${cepJSON.complemento}`;
  bairro.innerText = `Bairro: ${cepJSON.bairro}`;
  cidade.innerText = `Cidade: ${cepJSON.localidade}`;
  estado.innerText = `Estado: ${cepJSON.uf}`;
} 