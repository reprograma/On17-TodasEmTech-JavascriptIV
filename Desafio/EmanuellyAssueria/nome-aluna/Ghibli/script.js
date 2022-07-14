const container = document.querySelector(".container");

async function dataGhibli(url){
  try{
    const response = await fetch(url);
    const dataobjects = await response.json()

    // for(let i=0; i<=dataobjects.length-1; i++){
    dataobjects.forEach(item => {
      const card = document.createElement("div");
      container.appendChild(card);
      card.classList.add("card");

      const img = document.createElement("img");
      const titulo = document.createElement("h2");
      card.appendChild(img);
      img.src = item.image;
      card.appendChild(titulo);
      titulo.classList.add("titulo");
      titulo.innerText += ` ${item.title}`

      const list = document.createElement("ul");
      card.appendChild(list);

      const descricao = document.createElement("li");
      const diretor = document.createElement("li");
      const produtor = document.createElement("li");
      const lancamento = document.createElement("li");
      const tempo = document.createElement("li");
      list.appendChild(descricao);
      descricao.innerHTML += `<strong>Descrição:</strong> ${item.description}`;
      list.appendChild(diretor);
      diretor.innerHTML += `<strong>Diretor:</strong> ${item.director}`;
      list.appendChild(produtor);
      produtor.innerHTML += `<strong>Produtor:</strong> ${item.producer}`;
      list.appendChild(lancamento);
      lancamento.innerHTML += `<strong>Data de lançamento:</strong> ${item.release_date}`;
      list.appendChild(tempo);
      tempo.innerHTML += `<strong>Tempo de filme:</strong> ${item.running_time} minutos`;
    })
  }
  catch(err){
    console.error(err);
  }
}



dataGhibli('https://ghibliapi.herokuapp.com/films');