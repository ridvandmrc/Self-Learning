// Use only integer for indexing

const arr = [];

arr[0] = "zero";
arr[1.3] = "one point three"; // handle like an object
arr[2] = "two";

console.log(arr);

// Array length
// Create array with fix size
const arraySize = 30;

// literal way
const arr1 = [];
arr1.length = arraySize;

const arr2 = new Array(arraySize);

console.log(arr1["length"]); // return 30

// Understanding array size
// length is a special, we can increase or decrease size of array by using this prop.

const cats = ["siam", "tony", "puppy"];
console.log(cats.length);
cats.length = 2;
console.log(cats); // puppy removed
cats.length = 0;
console.log(cats); // empty

// Some array function
// add and remove

const animal = ["dog", "cat", "donkey", "monkey", "seagull"];
console.log(animal.shift()); // remove first element and return it
console.log(animal);
console.log(animal.unshift("seagull", "shark", "whale")); // add these items to beginning of array
console.log(animal);

// sort

const sortableArray = ["element1", "element3", "element2", "element0"];

const sortArrayFunction = (element1, element2) => {
  const firstIndex = element1[element1.length - 1];
  const secondIndex = element2[element1.length - 1];
  console.log(firstIndex, secondIndex);
  if (secondIndex > firstIndex) return -1;
  return 0;
};

console.log(sortableArray.sort(sortArrayFunction));

// every and some

// every return true if all element

const everyFunction = element => typeof element === "number";
const someFunction = element => element === "lebron"; // we can use it for searching

console.log(["lebron", 1, 2].every(everyFunction));
console.log([1, 2, 3].every(everyFunction));

console.log([1, 2, 3].some(someFunction));
console.log(["lebron", 1, 2].some(someFunction));

// reduce function, return one items for Array
const reduceFunction = (first, second) => {
  return first + second;
};

const findMax = (first, second) => {
  return Math.max(first, second);
};

const arrayToObject = (first, second, index) => {
  first[index] = second;
  return first;
};

console.log([1, 3, 5].reduce(reduceFunction, 0));
console.log([4, 20, 40, -8].reduce(findMax));
console.log(["Madrid", "Roma", "Prag", "Lizbon"].reduce(arrayToObject, {}));
