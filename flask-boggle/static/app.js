const words = []
let score = 0
$('.game').css('pointer-events', 'none')
$('#start').on('click', async function() {
    let time = 60
    $("#time").text("Go!")
    $("#time").css('display', 'block')
    $('.game').css('pointer-events', 'all')
    $('#start').css('display', 'none')
    let timer = setInterval(async function() {
        if (time <= 0) {
            clearInterval(timer)
            $('.game').css('pointer-events', 'none')
            $('#start').css('display', 'block')
            $("#time").css('display', 'none')
            let res = await axios.post("http://127.0.0.1:5000/score", {score: score})
            console.log(res)
            $("input").val('')
            if (res.data.highscore == res.data.score) {
                alert(`Game Over. Highscore!!!!: ${score}. Word Count: ${words.length}`)

            }
            else {
                alert(`Game Over. Score: ${score}. Word Count: ${words.length}`)
                location.reload()
            }

            score = 0
            words.length = 0
            $('#score').text(`Score: ${score}`)
       

        }
        if (time > 0) {
            $("#time").text(`Time remaining: ${time}`)
            time--
        }

    }, 1000)

})



$('#submit').on('click', async function(e) {
    $('.err').css("display", "none")
    e.preventDefault()
    let word = $("input").val()
    if (words.includes(word)) {
        return $(".already-selected").css('display', 'block')
    }

    let res = await axios.get("http://127.0.0.1:5000/guess", {params: {word: word}})
    if (res.data.result == "ok") {
        words.push(word)
        score += word.length
        $('#score').text(`Score: ${score}`)
    }
    else if (res.data.result == "not-on-board") {
        return $(".not-on-board").css("display", "block")

    }

    else {
        return $(".not-word").css("display", "block")

    }
    $("input").val('')

})