const dogName = "clumber";
const url = `https://dog.ceo/api/breed/${dogName}/images/random`;

const container = document.getElementById("demo");

//usando XMLHttpRequest()
function doguinhoRequest() {
  const request = new XMLHttpRequest(); //objeto nomeado como request
  request.open("GET", url, true);
  request.onload = () => {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response);
      const dogPic = document.createElement("img");
      dogPic.setAttribute("src", data.message); //é a url que é visto no postman
      container.appendChild(dogPic);
    }
  };
  request.send();
}

//doguinhoRequest();

//usando fetch-  mais usado

async function getDoguinho() {
  try {
    const resposta = await fetch(url);
    const data = await resposta.json(); // transforma a informação é um objeto json
    const dogPic = document.createElement("img");
    dogPic.setAttribute("src", data.message); //é a url que é visto no postman
    container.appendChild(dogPic);
  } catch (err) {
    console.error("HTTP Error: " + err);
  }
}

getDoguinho();