const container = document.getElementById ("demo")

async function getCards() {
    try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php') // ele vai puxar todo o conteudo
        const cards = await response.json() // armazendno o json na const cards
        // console.log (cards.data)
        const oursCards = cards.data.slice(180, 185) // capturando os cards e nela colocando o argumento slice
        console.log (oursCards);
        oursCards.map((cards) => {
            const section - document.getElement('div')
            section.setAttribute('class', 'card')

            const title - document.createElement('h1')
            title.setAttribute('class', 'tittle')   
            tittle.innerText = card.name 
            
            const type = 

        })

    }
    catch (err) {
        console.error(err)
    }
}

getCards()