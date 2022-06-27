const url = "https://reqres.in/api/users/2";
const container = document.getElementById("demo");

async function criarUsuario() {
  try {
    const respostaPost = await fetch(url, {
      method: "POST",
      body: {
        name: "izadora",
        job: "quality ",
      },
    });
    const data = await respostaPost.json();
    container.innerHTML = JSON.stringify(data);
  } catch (error) {
    console.error(error);
  }
}

criarUsuario();
