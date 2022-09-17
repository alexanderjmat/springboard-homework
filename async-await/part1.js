/*Part 1: Number Facts */

const numbersAPI = 'http://numbersapi.com/'

async function favoriteNumber () {
    let request = await axios.get(`${numbersAPI}8?json`)
    console.log(request.data['text']);
}

favoriteNumber()

async function multipleNumbers () {
    let request = await axios.get(`${numbersAPI}1..4?json`)
    const $ul = $('<ul></ul>')
    const values = Object.values(request.data)
    $("body").append($ul)
    for (let fact of values) {
        let $li = $(`<li>${fact}</li>`)
        $ul.append($li)
    }
}

multipleNumbers()

async function getFaveNums() {
    let request = await axios.get(`${numbersAPI}8?json`)
    const $p = $(`<p>${request.data.text}</p>`)
    $('body').append($p)
}

for (let i = 0; i < 4; i++) {
    getFaveNums()
}