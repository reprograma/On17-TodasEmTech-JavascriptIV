function limpa_formulário() {
    //Limpa valores do formulário de cep.
      document.getElementById('cep').value=("")
      document.getElementById('rua').value=("");
      document.getElementById('bairro').value=("");
      document.getElementById('cidade').value=("");
      document.getElementById('uf').value=("");
    }
    
    function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.localidade);
      document.getElementById('uf').value=(conteudo.uf);
    
    } 
    else {
     Swal.fire('CEP invalido')
      //CEP não Encontrado.
      //alert("CEP não encontrado.");
     limpa_formulário();
    }
    }
    
    function pesquisacep(valor) {
    
    //Nova variável "cep" somente com dígitos.
    const cep = valor.replace(/\D/g, '');
    
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
    
      //Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;
    
      //Valida o formato do CEP.
      if(validacep.test(cep)) {
    
          //Cria um elemento javascript.
          const script = document.createElement('script');
    
          //Sincroniza com o callback.
          script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
    
          //Insere script no documento e carrega o conteúdo.
          document.body.appendChild(script);
    
      } 
      else {
          //cep é inválido.
          limpa_formulário();
          Swal.fire("Formato de CEP inválido.");
      }
    } 
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário();
    }
    };