// Exercício dos doguinhos com XMLHttpRequest()

const dogName = 'dalmatian';
const url = `https://dog.ceo/api/breed/${dogName}/images/random`;
const container = document.getElementById('demo');

function dogRequest() {
  const request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = () => {
    if(request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response);
      const dogPicture = document.createElement('img');
      dogPicture.setAttribute('src', data.message);
      container.appendChild(dogPicture);
    }
  }
  
  request.send();
}

/*
dogRequest();
*/


// Exercicio dos doguinhos com fetch()
async function doguinhos() {
  try {
    const answer = await fetch(url);
    const data = await answer.json();
    const dogPicture = document.createElement('img');
    dogPicture.style.width = "65%";
    dogPicture.style.borderRadius = "0.5rem";
    dogPicture.setAttribute('src', data.message);
    container.appendChild(dogPicture);
  }
  catch(err) {
    console.error("Erro" + err);
  }
}

doguinhos();