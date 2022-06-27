function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //Refactor the above code to use two arrow functions. Turn it into a one-liner.

const doubled = arr => arr.map(val => val * 2);

//Refactor the following function to use arrow functions:
//Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }


  const squareAndFindEvenNums = nums => {
    const squares = nums.map(num => num ** 2);
    const evens = squares.filter(square => square % 2 == 0);
    return evens;
  }