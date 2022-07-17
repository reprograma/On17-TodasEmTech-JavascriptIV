async function init() {
    let resposta = await fetch("https://reqres.in/api/users/5", 
    {
        method: "POST",
        
    });
    console.log(await resposta.json());
}

init();