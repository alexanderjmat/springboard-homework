/*Part 1: Number Facts */

const numbersAPI = 'http://numbersapi.com/'

let favoriteNumber = axios.get(`${numbersAPI}8?json`).then(data => console.log(data))

let multipleNumbers = axios.get(`${numbersAPI}1..4?json`).then(data => {
    const $ul = $('<ul></ul>')
    const values = Object.values(data.data)
    console.log(values)
    $("body").append($ul)
    for (let fact of values) {
        let $li = $(`<li>${fact}</li>`)
        $ul.append($li)
    }
}
);

function getFaveNums() {
    let faveNumFact1 = axios.get(`${numbersAPI}8?json`).then(data => {
        console.log(data.data)
        const $p = $(`<p>${data.data.text}</p>`)
        $('body').append($p)
    })
}

for (let i = 0; i < 4; i++) {
    getFaveNums()
}
