const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
//input: a number
//output: an array of numbers
//returns the addNums function values in an array by the increasing increment value
//
function addNums10(increment) {
  // create new array
  let addnumsArray = [];
  // start at the given increment
  // we want to run it 10 times the increasing increment (run 10 times no matter what the number is)
  // we want the increment (or i) to increase by the arguement of increment
  for (let i = increment; i <= increment * 10; i += increment) {
    //for each iteration, push the value into our new array
    addnumsArray.push(addNums(i));
  }
  return addnumsArray;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let addManyNumsArray = [];

  for (let i = increment; i <= increment * 10; i += increment) {
    addManyNumsArray.push(addManyNums(i)); //
  }
  return addManyNumsArray;
}

module.exports = [addNums10, addManyNums10];
