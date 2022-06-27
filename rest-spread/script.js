//Given this function:

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}
// Refactor it to use the rest operator & an arrow function:

const filterOutOddNums = (...args) => args.filter(num => num % 2 === 0);


//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.

function findMin(...values) {
    return [...values].reduce((accum, next) => {
        if (next < accum) {
            return next;
        }
        return accum;
    })
}


//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2}
}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...doubled) {
    const double = doubled.map(value => value * 2);
    return [...arr, ...double];
}


// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    const randIndex = Math.floor(Math.random() * items.length)
    return items.filter((value, index) => index !== randIndex);
}

/** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({...obj, [`${key}`]: val});

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, value) => {
    const newObj = {...obj}
    newObj[key] = value;
    return newObj;
}

