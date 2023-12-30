animals = [
  "alligator",
  "bear",
  "cat",
  "dog",
  "elephant",
  "fish",
  "goose",
  "hamster",
  "iguana",
  "jaguar",
  "kangaroo",
];

// Count how many animals are in the list
// Time complexity: O(?) O(n)
// Space complexity: O(?) O(1)
function countAnimals(animals) {
  let count = 0; // 1 variable
  for (let i = 0; i < animals.length; i++) {
    // i is 1v, and animals is an array of n
    count++;
  }
  return count;
}

// Count how many animals are in the list
// Time complexity: O(?) O(1) - will always return a constant amount no matter how big or small n is
// Space complexity: O(?) O(1)
function countAnimals2(animals) {
  // animals is an array which depends on n elements inside of it
  return animals.length;
}

// Print the first 10 animals in the list
// Time complexity: O(?) O(1)
// Space complexity: O(?) O(1)
function printTenAnimals(animals) {
  // only prints 10 animals no matter how big n is so its constant on the bigger scale
  if (animals.length < 10) {
    throw Error("not enough animals");
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}

// Print out all the animals
// Time complexity: O(?) O(n) bc the array depends on how many animals are inside, as animals grows, n grows linearly
// Space complexity: O(?) O(1)
function printAnimals(animals) {
  //n variables
  for (let i = 0; i < animals.length; i++) {
    //i is 1v
    console.log(animals[i]);
  }
}

// Print out all the animals twice
// Time complexity: O(?) O(n) - we have two for loops which is O(n) + O(n) = 2o(n) which is just O(n)
// Space complexity: O(?) O(1)
function printAnimalsTwice(animals) {
  // animals is n
  for (let i = 0; i < animals.length; i++) {
    // i is 1v
    console.log(animals[i]);
  }
  for (let j = 0; j < animals.length; j++) {
    // j is 1v
    console.log(animals[j]);
  }
}

// Print all possible pairs of animals
// Time complexity: O(?) O(n^2) since have a nested for loop
// Space complexity: O(?) O(1)
function printAnimalPairs(animals) {
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(?) O(n^2) - since has nested loop
// Space complexity: O(?) O(n^2)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}

// Return an array containing all possible pairs of animals
// Time complexity: O(?) O(n^3) - since we have a nested loop within a nested loop each running n * n * n times
// Space complexity: O(n^3)
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      for (let k = 0; k < animals.length; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(?) O(n) - since in a loop
// Space complexity: O(?) O(1)
function findAnimal(animals, target) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}
