// Exercício dos doguinhos com XMLHttpRequest()
// Exercício dos doguinhos com XMLHttpRequest() que entende que é assincrono, poém, não entende que é promise.

const dogName = 'clumber'
const url = `https://dog.ceo/api/breed/${dogName}/images/random`
@@ -7,7 +7,7 @@ const container = document.getElementById("demo")
function doguinhoRequest() {
  const request = new XMLHttpRequest();

  request.open("GET", url, true)
  request.open("GET", url, true) //true para dizer que é assincrona.

  request.onload = () => {
    if(request.readyState == 4 && request.status == 200) {
@@ -18,7 +18,7 @@ function doguinhoRequest() {
    }
  }

  request.send()
  request.send() //sempre precisa existir para enviar a requisição
}

// doguinhoRequest()
@@ -28,7 +28,7 @@ function doguinhoRequest() {
async function getDoguinho() {
  try {
    const resposta = await fetch(url)
    const data = await resposta.json()
    const data = await resposta.json() //parsear, transformar JSON em objeto -> .json / await utilizada para aguardar a resposta 
    const dogPic = document.createElement('img')
    dogPic.setAttribute('src', data.message)
    container.appendChild(dogPic)

    //formato de objeto

const dados = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
  @@ -38,6 +40,8 @@ const dados = {
  
  console.log(dados.members[1].name)
  
  //jason como array
  
  const json = [
    {
      "name": "Molecule Man",

      //formato de objeto

const dados = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
  @@ -38,6 +40,8 @@ const dados = {
  
  console.log(dados.members[1].name)
  
  //jason como array
  
  const json = [
    {
      "name": "Molecule Man",