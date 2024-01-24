const findMinimum = (arr) => {
  // Your code here
  if (arr.length === 0) {
    // if no array exists, there is no min value
    return undefined;
  }

  let minimumValue = arr[0]; //initial min value, assume its first value in the array as a starting point

  for (let i = 0; i < arr.length; i++) {
    // looping through each element in the array to check values against base point which would have linear O(n) time complexity
    if (minimumValue > arr[i]) {
      minimumValue = arr[i];
    }
  }
  return minimumValue; // space complexity: have one var of minValue which is constant and another var i,  which is constant that does not change, so constant O(1) SC
};

/*const runningSum = (arr) => {
  //TC O(n)
  SC O(n)
  // Your code here
  //input: array
  //output: an array with each element as the total or sum of previous elements
  //create new array
  let newArr = [];
  //create a total/sum var
  let totalSum = 0;
  //loop through given arr
  for (let i = 0; i < arr.length; i++) {
    //push into new arr the total/sum var value
    totalSum += arr[i];
    arr[i] = totalSum;
    //newArr.push(totalSum);
  }
  //return new arr
  return newArr;
};*/

const runningSum = (arr) => {
  //TC O(n), SC O(1)
  // Your code here
  //input: array
  //output: an array with each element as the total or sum of previous elements
  //loop through given arr
  for (let i = 0; i < arr.length; i++) {
    //add current arrays index to previous arrays index and then assign it to current index
    arr[i] += arr[i - 1];
  }
  //return Arr;
  return arr;
};

/*
const evenNumOfChars = (arr) => {
  // Your code here
  //TC O(n)
  //SC O(n)
  return arr.filter((str) => str.length % 2 === 0).length;
};
*/

const evenNumOfChars = (arr) => {
  // Your code here
  //TC O(n), SC O(1)
  return arr.reduce((acc, curr) => {
    acc + (curr.length % 2) === 0 ? 1 : 0;
  }, 0);
};

const smallerThanCurr = (arr) => {
  // Your code here
  //TC O(n^2), SC O(n)
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
};

const twoSum = (arr, target) => {
  //TC O(n^2), SC O(1)
  // Your code here
  //input: array and target value, output: boolean value if two numbers sum up to target value
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  // Your code here
  //TC: O(n) SC: O(n)
  if (arr.length < 2) {
    return "Array should have at least two elements";
  }
  //initial two values for the largest number and second largest number
  let firstMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  //loop through array
  for (let num of arr) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > firstMax && num !== firstMax) {
      secondMax = num;
    }
  }

  return secondMax !== firstMax ? secondMax : "all elements are equal!";
};

const shuffle = (arr) => {
  // Your code here
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {}
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
