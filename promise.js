/*
 **Exercicio da aula
  ***Vamos resolver um codigo assincrono usando:
  [] Promises:
  [] Async/Await; <- foco desta aula, por ser o método mais moderno e usado
  *** Nosso Algoritmo
   ###Simulação de requisições de dados em uma empresa de e-commerce:
      1.informações do básico de um usuário;
      2. A partir da ID do usuário obter o endereço cadastrado;
      3. A partir da ID do usuária obter o histórico de pedido;
  */

    //sintaxe

    // Estrutura de uma promise:
    // new Promise(resolve, reject) => {
    //    resolve(resultado)
    //    reject(error)
    // })

   const pegarUsuaria = () => {
       return new Promise((resolve,reject)=>{
           setTimeout(()=> {
           //return reject(new Error('Retornou erro!))//reject é chamado se a requisição n foi rejeitada (erro)
           return resolve({
               //resolve é chamada se a requisição foi resolvida (sucesso)
               nome:'Anne'
               ,email: "anne@reprograma.com"
               ,id: 83726375936
           })
        

           },1000)
           })
        }
    
