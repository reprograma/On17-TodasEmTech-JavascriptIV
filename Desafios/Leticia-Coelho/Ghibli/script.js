const filmes = document.querySelector(".filmes");
const url = `https://ghibliapi.herokuapp.com/films`;

const getFilmesData = async () => {

  try{
      const response = await fetch(url);
      
          const data = await response.json(); 
          console.log(data);
          

          data.map((film) => {

            const img = document.createElement('img')
            img.className = "image";
            img.setAttribute("src", film.image)
            filmes.appendChild(img)

            const titulo = document.createElement("h2");
            titulo.className = "filme_h2";
            titulo.innerText = `${film.title}`;
            filmes.appendChild(titulo);

            const subtitulo = document.createElement("h3");
            subtitulo.className = "card_h3";
            subtitulo.innerText = `${film.original_title}`;
            filmes.appendChild(subtitulo);

            const description = document.createElement("p");
            description.className = "description";
            description.innerText = `${film.description}`;
            filmes.appendChild(description);

            const director = document.createElement("p");
            director.className = "director";
            director.innerText = `Director: ${film.director}`;
            filmes.appendChild(director);

            const producer = document.createElement("p");
            producer.className = "producer";
            producer.innerText = `Produtor: ${film.producer}`;
            filmes.appendChild(producer);

            const release_date = document.createElement("p");
            release_date.className = "producer";
            release_date.innerText = `Data de lançamento: ${film.release_date}`;
            filmes.appendChild(release_date);

          });

          

          
  }
  catch(err){
      console.error("Não funcionou", err);
  }
};

getFilmesData();