/*Estrutura de uma promisse:
new Promise((resolve,reject)=>{
  resolve(resultado)
  reject(erro)
}) */

const pegarUsuaria = () =>{
  //criamos uma promise a partir do Objeto Promisse
  return new Promise((resolve, reject) =>{
setTimeout(()=>{
  return resolve ({
    nome:"Ane",
    email:"anne@reprogama.com",
    id: 82213415413
  })
}, 1000)  
})
}