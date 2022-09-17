
/*Part 2: Deck of cards*/

const cardsAPI = 'https://deckofcardsapi.com/api/deck/'

/* 1 */
let shuffleCards = axios.get(`${cardsAPI}new/shuffle/?deck_count=1`).then(data => {
    console.log(data.data.deck_id)
    return axios.get(`${cardsAPI}${data.data.deck_id}/draw/?count=1`)
}).then(data => {
    console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}`)
})

/* 2 */

let deck_id = ''

let shuffleCards2 = axios.get(`${cardsAPI}new/shuffle/?deck_count=1`).then(data => {
    deck_id = data.data.deck_id;
    return axios.get(`${cardsAPI}${deck_id}/draw/?count=2`)
}).then(data => {
    console.log(`${data.data.cards[0].value} of ${data.data.cards[0].suit}, ${data.data.cards[1].value} of ${data.data.cards[1].suit}`)
})

/* 3 */

const button = document.querySelector('button')
const cards = document.querySelector('.cards')

let deck_id_1 = ''

let shuffleCards3 = axios.get(`${cardsAPI}new/shuffle/?deck_count=1`).then(data => {
    deck_id_1 = data.data.deck_id;
})

button.addEventListener('click', function() {
    axios.get(`${cardsAPI}${deck_id_1}/draw/?count=1`).then(data => {
        let image = new Image()
        image.src = `${data.data.cards[0].images.png}`
        $('.cards').append(image)
    })

})
