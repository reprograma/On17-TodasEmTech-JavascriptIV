const container = document.getElementById('demo');
const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

async function getCards() {
  try {
    const response = await fetch (url);
    const cards = await response.json();
    //console.log(infoCards.data[89]); 
    const oursCards = cards.data.slice(400, 405);
    console.log(oursCards);
    showInfo(oursCards);
  }

  catch(err) {
    console.error(err);
  }
}

function showInfo(oursCards) {
  const dados =  oursCards.map((card) => {
    const section = document.createElement('div');
    section.setAttribute('class', 'card');

    const title = document.createElement('h1');
    title.setAttribute('class', 'title');
    title.innerText = card.name;

    const type = document.createElement('p');
    type.setAttribute('class', 'type');
    type.innerText = card.type;

    const description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.innerText = card.desc;

    const image = document.createElement('img');
    image.setAttribute('class', 'image');
    image.setAttribute('src', card.card_images[0].image_url);

    container.appendChild(section);
    section.appendChild(image);
    section.appendChild(title);
    section.appendChild(type);
    section.appendChild(description);
  })
}

getCards();