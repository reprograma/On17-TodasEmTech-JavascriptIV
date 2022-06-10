const dogName = 'chihuahua'
const url = ` https://dog.ceo/api/breed/${dogName}/images/random `
const container = document.getElementById("demo")

function doguinhoRequest(){
  const request = new XMLHttpRequest()

  request.open("GET", url, true)

  request.onload = () => {
    if(request.readyState == 4 && request.status == 200){
      const data = JSON.parse(request.response)
      const dogPic = document.createElement('img')
      dogPic.setAttribute('src', data.message)
      container.appendChild(dogPic)
    }
  }

  request.send()
}

//doguinhoRequest()

async function getDoguinho(){
  try {
 const resposta = await fetch(url)
 const data = await resposta.json()
 const dogPic = document.createElement('img')
 dogPic.setAttribute('src', data.message)
 container.appendChild(dogPic)
  }
  catch(error){
    console.error("HTTP ERROR:" + error)
  }
}

getDoguinho()