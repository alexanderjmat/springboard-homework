console.log("Let's get ready to party with jQuery!");
$('article img').addClass('image-center');
$('article p').eq(5).remove();
$('#title').css('font-size', rand())
function rand() {
    let random = Math.floor(Math.random() * 101);
    let randFont = `${random.toString()}px`
    return randFont;
}
$('ol').append('<li>yo whats up guys this is aj</li>');
$('ol').empty('li').append('<p>Sorry for this list it was dumb</p>');
$('.mb-5').on('change', 'input', function() {
let r = $('input').eq(0).val()
let g = $('input').eq(1).val()
let b = $('input').eq(2).val()
console.log([r, g, b]);
return $('body').css('background-color', `rgb(${r}, ${g}, ${b})`)

})
$('img').on('click', function() {
    $(this).remove()
})
