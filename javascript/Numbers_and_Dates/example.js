// numbers

console.log(isNaN("test")); // not a number
console.log(isNaN(null)); // false
console.log(isNaN(0)); // false
console.log(isNaN(undefined)); // true

// Numbers Types

console.log(012); // => 10
console.log(0xa); // => 10
console.log(0b1010); // => 10

// Exponential

console.log(1e8); // 1000000000
console.log(0.3e3); // 300
console.log(0.3e-3); // 0.0003

// Number Object

console.log(Number.MAX_VALUE); // max number
console.log(Number.MAX_SAFE_INTEGER); // max safe number
console.log(Number.isNaN(null)); // false

const tempNum = 2.350000;
console.log(tempNum.toPrecision()); // 2.35
console.log(tempNum.toFixed(1))
