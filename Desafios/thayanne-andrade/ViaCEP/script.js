 
const logradouro = document.createElement('span');
const respostaLogradouro = document.createElement('span');

const bairro = document.createElement('span');
const respostaBairro = document.createElement('span');

const localidade = document.createElement('span');
const respostaLocalidade = document.createElement('span');

const uf = document.createElement('span');
const respostaUf = document.createElement('span');

let containerInfo = document.getElementById('demo');

document.querySelector('.search').addEventListener('submit', async(event) => {
    event.preventDefault(); 
    const cep = document.getElementById('searchInput').value;

    if (cep !== '') {
        try {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            const result = await fetch(url);
            const data = await result.json();
            
            showInfo({
                logradouro: data.logradouro,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf
            })
        }
        catch(err) {
          console.error("Não encontramos o CEP digitado" + err);
        }
    } 
});

function showInfo(data) {
    
    logradouro.innerHTML = 'Endereço:'
    respostaLogradouro.innerHTML = `${data.logradouro}`
    
    bairro.innerHTML = 'Bairro:'
    respostaBairro.innerHTML = `${data.bairro}`

    localidade.innerHTML = 'Cidade:'
    respostaLocalidade.innerHTML = `${data.localidade}`

    uf.innerHTML = 'UF:'
    respostaUf.innerHTML = `${data.uf}`

    containerInfo.appendChild(logradouro);
    containerInfo.appendChild(respostaLogradouro);

    containerInfo.appendChild(bairro);
    containerInfo.appendChild(respostaBairro);

    containerInfo.appendChild(localidade);
    containerInfo.appendChild(respostaLocalidade);

    containerInfo.appendChild(uf);
    containerInfo.appendChild(respostaUf);
};
