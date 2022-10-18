/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 0) return 1;

  return nums[0] * product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 1) return words[0].length
  
  if (words[0].length < words[1].length) {
    return longest(words.slice(1))
  }
  else {
    words.splice(1, 1)
    return longest(words)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let newS = str[0]
  if (str.length == 0) return str
  return newS + everyOther(str.slice(2, str.length))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (!str) {
    return false
  }
  if (str.length == 1 || (str.length == 2 && str[0] == str[1])) {
    return true
  }
  if (str[0] == str[str.length - 1]) return isPalindrome(str.slice(1, str.length -1))

  return false


}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i > arr.length - 1) {
    return -1
  }
  if (arr[i] == val) {
    return i
  }
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 0) {
    return str
  }
  return str.slice(str.length - 1) + revString(str.slice(0, str.length - 1))
}

/** gatherStrings: given an object, return an array of all of the string values. */
//viewed solution for this one

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let middleIdx = Math.round((arr.length - 1) / 2)
  if (arr.length == 0 || arr[0] > val || arr[arr.length - 1] < val) return - 1
  if (arr[arr.length - 1] == val) return arr.length - 1;

  else {
    if (arr[middleIdx] > val) return binarySearch(arr.slice(0, middleIdx), val)
    else if (arr[middleIdx] == val) return binarySearch(arr.slice(0, middleIdx + 1), val)
    while (arr[middleIdx] <= val) {
      middleIdx = Math.round((middleIdx + (arr.length - 1)) / 2)
    }
    return binarySearch(arr.slice(0, middleIdx), val)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
