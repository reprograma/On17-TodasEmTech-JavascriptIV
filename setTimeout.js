/*setTimeout(() =>{
   console.log('olá')
 },4000)*/

 /*console.log('Esse console vai retornar primeiro')
 setTimeout(() =>console.log('Esse console vai retornar segundo'), 3.5 * 1000)
 console.log('Esse console vai retornar terceiro')*/

 setTimeout(primeira = () =>{
  console.log('Retorno primeira Callback')}
, 3000)

setTimeout(segunda =() =>{
  console.log('Retorno segunda Callback')}
, )

console.log('console direto 1')

setTimeout(terceira = () =>{
  console.log('Retorno terceira Callback')}
, 500)

console.log('console direto 2')