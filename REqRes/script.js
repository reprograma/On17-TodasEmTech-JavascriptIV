  const url = "https://reqres.in/api/users"
  const container = document.getElementById("demo")


  async function criarUsuaria(){
    try{
      const resposta = await fetch(url,{
        method: "POST",
        body:{
          "name": "morpheus",
          "job": "leader"
      }
      })
      const data = await resposta.json()
    
      container.innerHTML =JSON.stringify(data)
      
    }
    catch(error){
      console.error(error)
    }
  }
  criarUsuaria()
  

 async function excluirUsuaria(){
    try{
      const resposta = await fetch(url,{method: "DELETE"})
     if(resposta.ok){
       container.innerHTML = 'Deletada! 🙁'
       }
     }
    catch(error){
      console.error(error)
    }
  }

  excluirUsuaria()

