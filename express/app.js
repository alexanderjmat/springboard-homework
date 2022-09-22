const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello, welcome to the calculator!</h1>')
})

app.get('/mean?:nums', (req, res) => {
    let sum = 0
    let numbers = req.query.nums
    const arrMean = []
    if (numbers.length == 0) {
        return res.status(400).json('Nums are required')
    }
    for (let num of numbers) {
        if (num != ',' && parseInt(num) != num ) {
            return res.status(400).json(`Inputs must be a number`)
        }
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

app.get('/median?:nums', (req, res) => {
    let numbers = req.query.nums
    const arrMedian = []
    if (numbers.length == 0) {
        return res.status(400).json('Nums are required')
    }

    for (let num of numbers) {
        if (num != ',' && parseInt(num) != num ) {
            return res.status(400).json(`Inputs must be a number`)
        }
        if (num != ',') {
            arrMedian.push(parseInt(num))
        }
    }
    arrMedian.sort((a, b) => a-b)
    if (arrMedian.length % 2 == 0) {
        let middleIndex = (arrMedian[Math.round((arrMedian.length - 1) / 2)] + arrMedian[Math.round((arrMedian.length - 2) / 2)]) / 2
        return res.send({response: {
            operation: 'median',
            value: `${middleIndex}`
        }})

    }
    else {
        let middleIndex = arrMedian[(arrMedian.length - 1) / 2]
        return res.send({response: {
            operation: 'median',
            value: `${middleIndex}`
        }})
    }


})

app.get('/mode?:nums', (req, res) => {
    let numbers = req.query.nums
    let counter = {}
    let highestNumber = 0
    let winningKey;
    const arrMode = []
    if (numbers.length == 0) {
        return res.status(400).json('Nums are required')
    }
    for (let num of numbers) {
        if (num != ',' && parseInt(num) != num ) {
            return res.status(400).json(`Inputs must be a number`)
        }
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
        if (counter[num] > highestNumber) {
            highestNumber = counter[num]
        }
    }
    for (let num in counter) {
        if (counter[num] == highestNumber) {
            winningKey = num;
        }
    }
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
