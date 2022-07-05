// api key: KFrPk9R73nQvqh87wpGSzaV7QSqdU6Gk

const form = $('#search')
const remove = $('#remove')
const images = $('#images')
// let val = $('#input').val();
async function searchGif(term) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: "KFrPk9R73nQvqh87wpGSzaV7QSqdU6Gk", q: term}});
    const dataArr = res.data.data;
    const num = Math.floor(Math.random() * dataArr.length)
    const url = dataArr[num].images.downsized.url;
    const img = $(`<img src=${url} id=${term}-${num}>`)
    images.append(img);
}

form.on('submit', function(e) {
    e.preventDefault();
    let val = $('#input').val();
    searchGif(val);
})

remove.on('click', images, function(e) {
    images.empty();
})

