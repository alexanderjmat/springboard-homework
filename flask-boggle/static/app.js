$('button').on('click', async function(e) {
    e.preventDefault()
    let word = $("input").val()


    // const formData = JSON.stringify({"word": word})
    let formData = new FormData()
    formData.append("word", word)
    

    // formData = JSON.stringify(Object.fromEntries(formData.entries()))
    // console.log(formData)




    let res = await axios({method: "POST",
    url: 'http://127.0.0.1:5000/guess', 
    data: JSON.stringify({"word": word})})
    console.log(res)

})