const container = document.getElementById("container")

// const logradouro = document.getElementById("logradouro").value
// const bairro = document.getElementById("bairro").value
// const localidade = document.getElementById("localidade").value
// const uf = document.getElementById("uf").value


async function getCep() {
    const digitarCep = document.getElementById("digitarCep").value;
try {
    const resposta = await fetch(`https://viacep.com.br/ws/${digitarCep}/json/`)
    const cep = await resposta.json()
    console.log(cep)
    }
catch(err) {
    console.error(err)
}
}

