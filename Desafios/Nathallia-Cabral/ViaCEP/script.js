
const botaoBuscar = document.getElementById('submit')
botaoBuscar.addEventListener("click", function(){ 

getData()
});

async function getData() {
  try {
     const inputCep = document.getElementById('cep_input').value 
    const response = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`, {
      method: 'GET',
      headers: {
      'Content-Type': 'aplicaticon/json'
      },
      cache: 'default'
    })
    const data = await response.json()
    console.log(data)
    const logradouro = document.getElementById('logradouro')
    logradouro.value = data.logradouro
    const cidade = document.getElementById('cidade')
    cidade.value = data.localidade
    const bairro = document.getElementById('bairro')
    bairro.value = data.bairro
    const estado = document.getElementById('estado')
    estado.value = data.uf
  }
  catch(erro) {
   alert("Cep não encontrado");
  }
}