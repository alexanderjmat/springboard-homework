const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello, welcome to the calculator!</h1>')
})

app.get('/mean?:nums', (req, res) => {
    let sum = 0
    let numbers = req.query.nums
    const arrMean = []
    for (let num of numbers) {
        if (num != ',') {
            arrMean.push(parseInt(num))
        }
    }
    for (let num of arrMean) {
        sum += num;
    }
    return res.send({
        response: {
            operation: 'mean',
            value: `${sum / arrMean.length}`
        }
    })

})

// app.get('/median?:nums', (req, res) => {
//     let numbers = res.query.nums
//     const arrMedian = []

//     for (let num of numbers) {
//         if (num != ',') {
//             arrMedian.push(parseInt(num))
//         }
//         for (let i = 0; i < arrMedian.length; i++) {
//             for (let j = 0; j < arrMedian.length; j++) {

//             }
            
//         }
//     }


// })

app.get('/mode?:nums', (req, res) => {
    let numbers = req.query.nums
    let counter = {}
    let highestNumber = 0
    let winningKey;
    const arrMode = []
    for (let num of numbers) {
        if (num != ',') {
            arrMode.push(parseInt(num))
        }
    }
    for (let num of arrMode) {
        if (counter[num]) {
            counter[num]++
        }
        else {
            counter[num] = 1
        }
    }
    for (let num in counter) {
        console.log(num)
        if (counter[num] > highestNumber) {
            highestNumber = counter[num]
        }
    }
    for (let num in counter) {
        if (counter[num] == highestNumber) {
            winningKey = num;
        }
    }
    console.log(counter)
    return res.send({
        response: {
            operation: 'mode',
            result: `${winningKey}`
        }
    })
})





app.listen(3000, () => {
    console.log("App running on port 3000")
})
