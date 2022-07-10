//https://viacep.com.br/ws/${cep}/json/
const promptCep = prompt("Insira o seu cep:");
const container = document.getElementById("via-cep")
const url = `https://viacep.com.br/ws/${promptCep}/json/`




async function getEndereco(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        const titulo = document.createElement('h1')
        const section = document.createElement('div')
        const cep = document.createElement('P')
        const rua = document.createElement('P')
        const bairro = document.createElement('P')
        const localidade = document.createElement('P')
        const uf = document.createElement('P')
        
        section.setAttribute('class', 'div')
        titulo.setAttribute('class', 'h1')
        cep.setAttribute('class', 'cep')
        rua.setAttribute('class', 'rua')
        bairro.setAttribute('class', 'bairro')
        localidade.setAttribute('class', 'localidade')
        uf.setAttribute('class', 'uf')
        
        titulo.innerText = "O CEP digitado é referente ao endereço:"
        cep.innerText = ("Cep: " + data.cep)
        rua.innerText = ("Logradouro: " + data.logradouro)
        bairro.innerText = ("Bairro: " + data.bairro)
        localidade.innerText = ("Município: " + data.localidade)
        uf.innerText = ("Estado: " + data.uf)

        container.appendChild(section)
        section.appendChild(titulo)
        section.appendChild(cep)
        section.appendChild(rua)
        section.appendChild(bairro)
        section.appendChild(localidade)
        section.appendChild(uf)

        
    } catch (error) {
        console.error("HTTP Error: " + error);
    }
}

getEndereco(url)


