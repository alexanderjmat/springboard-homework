function merge(arr1, arr2) {
    const results = []
    let a = 0
    let b = 0
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] <= arr2[b]) {
            results.push(arr1[a])
            a++
        } else {
            results.push(arr2[b])
            b++
        }
    }
    if (a == arr1.length) {
        for (let i = b; i < arr2.length; i++) {
            results.push(arr2[i])
        }
    }
    else {
        for (let i = a; i < arr1.length; i++) {
            results.push(arr1[i])
        }
    }
    return results
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

module.exports = { merge, mergeSort};