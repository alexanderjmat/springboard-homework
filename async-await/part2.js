
/*Part 2: Deck of cards*/

const cardsAPI = 'https://deckofcardsapi.com/api/deck/'

/* 1 */
async function shuffleCards() {
    let request = await axios.get(`${cardsAPI}new/shuffle/?deck_count=1`);
    let id = request.data.deck_id
    let request_2 = await axios.get(`${cardsAPI}${id}/draw/?count=1`)
    console.log(`${request_2.data.cards[0].value} of ${request_2.data.cards[0].suit}`)
}

shuffleCards()

/* 2 */

let deck_id = ''

async function shuffleCards2() {
    let request = await axios.get(`${cardsAPI}new/shuffle/?deck_count=1`)
    deck_id = request.data.deck_id
    let request_2 = await axios.get(`${cardsAPI}${deck_id}/draw/?count=2`)
    console.log(`${request_2.data.cards[0].value} of ${request_2.data.cards[0].suit}, ${request_2.data.cards[1].value} of ${request_2.data.cards[1].suit}`)
}

shuffleCards2()

/* 3 */

const button = document.querySelector('button')
const cards = document.querySelector('.cards')

let deck_id_1 = ''



async function shuffleCards3() {
    let request = await axios.get(`${cardsAPI}new/shuffle/?deck_count=1`)
    deck_id_1 = request.data.deck_id
} 

shuffleCards3()

button.addEventListener('click', async function() {
    let request = await axios.get(`${cardsAPI}${deck_id_1}/draw/?count=1`)
    let image = new Image()
    image.src = `${request.data.cards[0].images.png}`
    $('.cards').append(image)
})