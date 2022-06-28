const card = document.getElementById("container");
const sendCep = prompt("Digite seu cep(Apenas números!):");

async function getCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const adressCompleto = await response.json();
    adressCard(adressCompleto);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
getCep(sendCep);

function adressCard(dataAdress) {
  //construção do card
  const divContainer = document.createElement("div");
  divContainer.classList.add("card-container");
  card.appendChild(divContainer);

  const cep = document.createElement("p");
  cep.classList.add("cep", "text");
  cep.innerHTML = `CEP: ${dataAdress.cep}`;
  divContainer.appendChild(cep);

  const adress = document.createElement("p");
  adress.classList.add("rua", "text");
  adress.innerText = `Rua: ${dataAdress.logradouro}`;
  divContainer.appendChild(adress);

  const district = document.createElement("p");
  district.classList.add("bairro", "text");
  district.innerText = `Bairro: ${dataAdress.bairro}`;
  divContainer.appendChild(district);

  const city = document.createElement("p");
  city.classList.add("cidade", "text");
  city.innerText = `Cidade: ${dataAdress.localidade}`;
  divContainer.appendChild(city);

  const state = document.createElement("p");
  state.classList.add("cidade", "text");
  state.innerText = `UF: ${dataAdress.uf}`;
  divContainer.appendChild(state);
}

adressCard();

// Tentar depois fazendoo request clicando no botão

// const btn = document.getElementById("send");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const cep = document.getElementById("informacao");
//   const valueCep = cep.value;
//   console.log(valueCep);

// });
