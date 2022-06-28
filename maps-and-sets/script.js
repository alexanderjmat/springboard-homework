//What does the following code return?
new Set([1,1,2,2,3,4]) // -> Set(4) {1, 2, 3, 4}


//What does the following code return?
//[...new Set("referee")].join("") // 'ref'


//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//Map(2) {Array(3) => true, Array(3) => false}


//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    const arrSet = [...new Set(arr)]
    if (arr.length == arrSet.length) {
        return false;
    }
    return true;
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
    const vowels = 'aeiou'
    const arrCount = [['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]
    for (let char of str) {
        if (vowels.includes(char)) {
            for (let entry of arrCount) {
                if (char == entry[0]) {
                    entry[1]++;
                }
            }

        }
    }
    
    const filteredArr = arrCount.filter((val) => {
        return val[1] !== 0;
    })

    const myMap = new Map(filteredArr);
    return myMap;
}





