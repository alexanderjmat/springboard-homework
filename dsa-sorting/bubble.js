function bubbleSort(arr) {
    let count = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        let swapped = false
        for (let j = 0; j < i; j++) {
            count++
            let a = arr[j]
            let b = arr[j + 1]
            if (a > b) {
                swapped = true
                arr[j] = b
                arr[j + 1] = a
            }
            if (j == i - 1 && swapped == false) {
                return arr
            }
        }
    }
    return arr
}

module.exports = bubbleSort;