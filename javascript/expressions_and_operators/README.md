## Expressions and Operators

### Operators

***Assignment operators***

Some operators;

| Name      | operators | example |
| ----------- | ----------- | ---- |
| Left shift assignment      | x <<=f()  | 2 << 2 ==> 8 |
| Right shift assignment   | x >>= f()   | 8 >> 2 ==> 2 |
| Unsigned right shift assignment   | x >>>= f()   | 8 >>> 2 ==> 2 |
| Logical AND assignment   | x &&= f()   | x && (x = f()) |
| Logical nullish assignment   | x ??= f()   | x ?? (x = fn()) |

***Note:***
  
    difference between Or nullish coalescing operator is that;
    ***OR*** operator use right value if left is ***falsy***,

    ***nullish coalescing*** operator use right value if left is ***null*** or ***undefined***

```js
console.log(0  || "not found") // "not found"
console.log(0  ?? "not found") // 0

console.log(""     || "not found") // "not found"
console.log(""     ?? "not found") // ""

console.log(false || "not found") // "not found"
console.log(false ?? "not found") // false

console.log(undefined || "not found") // "not found"
console.log(undefined ?? "not found") // "not found"
```

### Destructing

for complex assignments, it possible to extract data from arrays or objects...

```js
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```

### delete operators
this operators deletes an object's property;

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myobj.h; // returns true (can delete user-defined properties)
```
### typeof
typeof returns astring indicating the type of operand.
```js
var myFun = new Function('5 + 2');          // function
var shape = 'round';                        // string
var size = 1;                               // number
var foo = ['Apple', 'Mango', 'Orange'];     // object
var today = new Date();                     // object
typeof desntExist;                          // undefined
typeof null                                 // object
```

### in
in operator returns ***true*** if specified property is in the specified object.

```js
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true
```

### =====> Summary

* some nice operators (<<, >>, >>>, &&= ||=, ??=)
* dif between OR and Nullish coalescing, 

Or: use right if left is falsy

NUllish: use right if left is **null** or **undefined**