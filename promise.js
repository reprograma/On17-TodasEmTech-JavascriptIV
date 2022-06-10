/* 
##Exercício da aula
 ##Vamos resolver um código assincrono usando:
   []Promises;
   [] Async/await; <- foco desta aula, por ser o método mais moderno usado 
##Nosso Algoritmo
 ##simulão de requisições de dados em uma empresa de e-comerce:
   1. Informações do básicas de uma usuária;
   2. A partir de id da usuária obter o endereço cadastrado;
   3. apartir da id da usuária obter o histórico de pedidos;
*/

 // sintaxe

 // estrutura de uma promisse:
 // new Promise((resolve,reject) => {
//  resolve(resultado)
//  reject(erro)
//  })


const pegarUsuaria = ()=> {
  return new Promise((resolve,reject)=>{
    //criamos uma promise a partir do Objeto Promise
 setTimeout(()=>{
  // return reject(new Error('Retornou erro!'))// reject é chamadado se a requisição não foi rejeitada (erro)
    return resolve(
      //resolve é chamada se a requisição foi resolvida (sucesso)
     {
        nome:"Mayara",
      email:"mayaraaraujorocha@hotmail.com",
      id: 9874563210
    })
 },1000)
  })
}

const pegarEndereco = (idUsuaria) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=> {
      return resolve({
        rua: "rua marielle franco",
        numero: "13",
        cidade: "São Paulo",
      })
    }, 3 * 1000)
  })
}

const pegarPedidos = (idUsuaria) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=> {
      return resolve ({
        pedido1: "adesivo",
        pedido2:"caneca",
        pedido3: "mouse",
      })
    }, 2500)
  })
}

//console.log(pegarUsuaria())

pegarUsuaria()
 .then((usuaria) => {
   //console.log(usuaria)
   return pegarEndereco(usuaria.id)
   .then((endereco) => {
   //  console.log(endereco)
     return{
       usuaria: {
         id: usuaria.id,
         nome: usuaria.nome,
         email: usuaria.email,
       }, // precisamos passar no retorno do segundo then os dados de usuaria explicitamente, por esse then retorna por padrão só as informações da ultima requisição, que seria endereco
       endereco: {
         rua: endereco.rua,
         numero: endereco.numero,
         cidade: endereco.cidade,
       }
      }
   })
 }).then((resposta) => {
   return pegarPedidos(resposta.usuaria.id)
   .then((pedidos) => {
     console.log(`
        Usuária: ${resposta.usuaria.nome}
        Email: ${resposta.usuaria.email}
        Endereco: ${resposta.endereco.rua}, ${resposta.endereco.numero} , ${resposta.endereco.cidade}
        Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2} , ${pedidos.pedido3}
     `)
   })
 })
  .catch((error) => {
    console.error("capituramos um erro:", error)
  })