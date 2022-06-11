// const container = document.getElementById("demo")

// async function getCards() {
//   try {
//     const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
//     const cards = await response.json()
//     // console.log(cards)
//     // console.log(cards.data)
//     // console.log(cards.data[25])
//     const oursCards = cards.data.slice(299, 304)
//     console.log(oursCards);
//     oursCards.map((card) => {
//       const section = document.createElement('div')
//       section.setAttribute('class', 'card')

//       const title = document.createElement('h1')
//       title.setAttribute('class', 'title')
//       title.innerText = card.name

//       const type = document.createElement('p')
//       type.setAttribute('class', 'type')
//       type.innerText = card.type

//       const description = document.createElement('p')
//       description.setAttribute('class', 'description')
//       description.innerText = card.desc

//       const image = document.createElement('img')
//       image.setAttribute('class', 'image')
//       image.setAttribute('src', card.card_images[0].image_url)

//       container.appendChild(section);
//       section.appendChild(image)
//       section.appendChild(title)
//       section.appendChild(type)
//       section.appendChild(description)
//     })
//   }
//   catch(err) {
//     console.error(err)
//   }
// }

// getCards()

const container = document.getElementById("demo")

async function getCards() {
  try {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    const cards = await response.json()
    // console.log(cards)
    // console.log(cards.data)
    // console.log(cards.data[25])
    const oursCards = cards.data.slice(299, 309)
    console.log(oursCards);
    oursCards.map((card) => {
      const section = document.createElement('div')
      section.setAttribute('class', 'card')

      const title = document.createElement('h1')
      title.setAttribute('class', 'title')
      title.innerText = card.name

      const type = document.createElement('p')
      type.setAttribute('class', 'type')
      type.innerText = card.type

      const description = document.createElement('p')
      description.setAttribute('class', description)
      description.innerText = card.desc

      const image = document.createElement('img')
      image.setAttribute('class', 'image')
      image.setAttribute('src', card.card_images[0].image_url)

      container.appendChild(section)
      section.appendChild(image)
      section.appendChild(title)
      section.appendChild(type)
      section.appendChild(description)
    })


  }
  catch(err) {
    console.error(err)
  }
}
getCards()