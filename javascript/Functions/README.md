## Functions

signature of function is that;

* Parameters and type,
* return value and type

Note:
````
Primitive parameters (such as a number) are passed by value, that means that if function changes the value of parameters, this change is not reflected globally
````
.......

`````
If parameters is non-primitive (array or object) and function changes its value, that changes is visible outside the function
`````

```js
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)
```
### Function expressions

syntactically include function name,
anonymous, does not have a name

```js
function square (){...} //syntactically
const square = function(){...} //anonymous
var x = square(4)

// ********************************
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
console.log(factorial(3))
```

* Additionally, we can pass afunction as an argument to other function.

below example is referring map,

```js
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);
```

### Nested function
The nested (inner) function is private to its containing (outer) function.

it also froms a closure. a nested function can "inherit" the arguments and variables of its containing function

one example of nested functions;

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                        // it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```

### Closures

closure is one the most powerful feature for javascript, javascript allow nesting of functions and grants the inner function full access to all variables.

however outer function does not have access to variables and function. This provides a sort of ***encapsulation*** for variables of the inner function.

one example of closure;
```js
var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
        newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver
```

### Function parameters

**Default Parameters:**

* In js, parameters of functions default to **undefined**.

sometimes, it is useful to set initial value

```js
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(5); // 5
// ----------------------------
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

### Rest parameters
rest parameters syntax allows us to represent an indefinite number of arguments as an array.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

### Arrow functions

Arrow functions are always anonymous. It's shorter and non-binding of this.

```js
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```
### Predefined functions
<ul>
<li>eval(): evaluates Js code represented as a string</li>
<li>uneval(): create string representation of source code</li>
<li>isFinite(): check if number is a finite number </li>
<li>isNan(): Number.isNaN </li>
<li>parseFloat(): parse string and return floating point </li>
<li>parseInt(): parse string and return integer (+ '44') </li>
<li> decodeURI(): decodes a uniform resource Identifier (URI)</li>

```js
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}
```
<li> encodeURI(): encodes a Uniform Resource Identifier (URI)</li>

```js
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}
```

</ul>

### ======> Summary
 * passed by value if type is primitive.
 * passed by reference if type is non-primitive.
 * syntactically and anonymous function
 * Closures: it allow to accent inner function and provide encapsulation.
 ```js
 const createPet = ()=>{
     var name;
     return {
         setName(name)=> this.name = name;,
         getName()=> this.name
     }
 }
 ```
 * Rest parameters: allow us to represent an indefinite number of arguments as an array.
 ```js
 function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
 ```
 * Important prefine functions
  
   * eval, unEval, isFinite, isNan, parseFloat, parseInt, decodeURI, encodeURI