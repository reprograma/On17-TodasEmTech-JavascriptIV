const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const eNumeral = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumeral(cep); 

const pesquisaCep = async() => {
    limparFormulario ();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json ();
        if (endereco.hasOwnProperty('erro')){
        document.getElementById('endereco').value = 'O CEP não foi encontrado!';
    } else {
        preencherFormulario(endereco);
    }
    } else {
        document.getElementById('endereco').value = 'O CEP está incorreto!';
    }
}
document.getElementById('cep').addEventListener('focusout',pesquisaCep);