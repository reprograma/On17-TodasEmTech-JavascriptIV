// try/catch

/*const nome = 'Ayane'

try {

  nome = 'Luine'
}
catch(err){
 console.error('Errou: ' ,err)
}
console.log('após o try')
*/

// Resolvendo o mesmo exercício com async/await
const pegarUsuaria = ()=> {
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
      return resolve({
        nome:"Mayara",
      email:"mayaraaraujorocha@hotmail.com",
      id: 9874563210
    })
 },1000)
  })
}

/*let usuaria = pegarUsuaria()
console.log(usuaria)*/ //tentando armazenar direto sem o async/await, vai ter a resposta <pending> 

const pegarEndereco = (idUsuaria) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=> {
      return resolve({
        rua: "rua marielle franco",
        numero: "13",
        cidade: "São Paulo",
      })
    }, 3 * 1000)


// const nome = 'Ayane'

// try {
//   nome = 'Luine'
// }
// catch(err) {
//   console.error('ERRO CAPTURADO: ', err)
// }

// console.log('após o try')

// Resolvendo o mesmo exercício com async/await

const pegarUsuaria = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error('Retornou erro!'))
      return resolve({
        nome: "Anne",
        email: "anne@reprograma.com",
        id: 83726375936
      })
    }, 1000)
  })
}

// let usuaria = pegarUsuaria()
// console.log(usuaria)

const pegarEndereco = (idUsuaria) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          return resolve({
            rua: "rua marielle franco",
            numero: "9",
            cidade: "recife",
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
async function resolverPromises(){
  try {
    console.time('Tempo')
 const usuaria = await pegarUsuaria()
 //const endereco = await pegarEndereco(usuaria.id)
 //const pedidos = await pegarPedidos(usuaria.id)
 const resultados = await Promise.all([
  pegarEndereco(usuaria.id),
  pegarPedidos(usuaria.id)
 ])
 const endereco = resultados[0]
 const pedidos = resultados[1]
 console.log(`
      Usuária: ${usuaria.nome}
      Email: ${usuaria.email}
      Endereco: ${endereco.rua}, ${endereco.numero} , ${endereco.cidade}
      Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2} , ${pedidos.pedido3}
 `)
 console.timeEnd('Tempo')
  }
  catch(error){
 console.error('Capturamos um errinho aqui:',error)
  }
}
resolverPromises()

  return new Promise((resolve, reject) => {
      setTimeout(() => {
          return resolve({
            pedido1: "adesivo",
            pedido2: "caneca",
            pedido3: "mouse",
          })
      }, 2500)
  })
}

async function resolverPromises() {
  try {
    // console.time('Lana Front-end')
    const usuaria = await pegarUsuaria()
    const endereco = await pegarEndereco(usuaria.id)
    const pedidos = await pegarPedidos(usuaria.id)
    // const resultados = await Promise.all([
    //   pegarEndereco(usuaria.id),
    //   pegarPedidos(usuaria.id)
    // ])
    // const endereco = resultados[0]
    // const pedidos = resultados[1]
    console.log(`
      Usuária: ${usuaria.nome}
      E-mail: ${usuaria.email}
      Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
      Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}
    `)
    // console.timeEnd('Lana Front-end')
  }
  catch(err) {
    console.error('Capturamos um erro: ', err)
  }
}

resolverPromises()
