

$('.submit').on('click', function(e) {
    let title = $('.text').val();
    let num = $('.num').val();
    let div = $(`<div class="rating">${title}: ${num}/10 <button class='remove' type='button'>Remove</button></div>`)
    $('body').append(div);

})

$('body').on('click', '.remove', function(e) {
    $(e.target).closest('div').remove();
})