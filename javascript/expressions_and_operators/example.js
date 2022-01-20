// Some operators

console.log(2 << 2); // 8 left two bit
console.log(8 >> 2); // 2 , right two bit shift

let k = 5;

k === 4 && console.log("not showing");
k === 5 && console.log("test");
k === 4 || console.log("k is not equal 4");
// 0 ?? console.log('nullish operator') //

// Destructure

const foo = ["one", "two", "three"];
console.log(foo); // ==> ['one','two','three']
console.log(...foo); // ==> one,two,three

// delete
const obj = { test: "test" };
delete obj.test;

// typeof
const func = () => undefined;
console.log(typeof func); // return function type
console.log(typeof "string"); // return string
console.log(typeof 1); // return number
console.log(typeof null); // return object

// in

console.log("one" in foo); // return false because it is searching by index
console.log(0 in foo); // return true
console.log(8 in foo); //return false

// in for object search
const testObject = { name: "Ridvan", surname: "Demirci" };

console.log("name" in testObject); // return true
console.log("notExist" in testObject); // return false

// we can use 'in' for search in object
