// Exercício dos doguinhos com XMLHttpRequest() que entende que é assincrono, poém, não entende que é promise.

const dogName = 'clumber'
const url = `https://dog.ceo/api/breed/${dogName}/images/random`
const container = document.getElementById("demo")

function doguinhoRequest() {
  const request = new XMLHttpRequest();

  request.open("GET", url, true) //true para dizer que é assincrona.

  request.onload = () => {
    if(request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response)
      const dogPic = document.createElement('img')
      dogPic.setAttribute('src', data.message)
      container.appendChild(dogPic)
    }
  }

  request.send() //sempre precisa existir para enviar a requisição
}

// doguinhoRequest()

// Exercicio dos doguinhos com fetch()

async function getDoguinho() {
  try {
    const resposta = await fetch(url)
    const data = await resposta.json() //parsear, transformar JSON em objeto -> .json / await utilizada para aguardar a resposta 
    const dogPic = document.createElement('img')
    dogPic.setAttribute('src', data.message)
    container.appendChild(dogPic)
  }
  catch(err) {
    console.error("HTTP Error: " + err)
  }
}

getDoguinho()
