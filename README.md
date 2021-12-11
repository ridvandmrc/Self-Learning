# Javascript
Create Javascript documentation 

## Grammar and types
<ol>
    <li> Case-sensitive: früh and Früh refers different variable</li>
</ol>

## Declaration
### Js has three kind of variable declarations
 <ol>
  <li><b>var:</b> Declares global variables, not recommend it is hard to track </li>
  <li><b>let:</b> Declares scoped variables, local variable and you can change its value after assign</li>
  <li><b>const: </b> Declares scoped and readonly variable</li>
 </ol>
 <b> Identifier must start with letter,underscore dollar, Subsequent characters can also be digits</b>

<b> Also, we can defined variable without using any type it is calling undeclared global </b>

## Evaluating variables
we are using **var** or **let** to declaration, if value is not specified, the value has **undefined**
The undefined value converts to **NaN** when used in numeric context.

## Data type conversion
Js is a dynamic typed language. (weak type)
```js
var answer = 42;
answer = 'thanks for payment'
```
### '+' operator and Numbers

if the statement involve string and number, **'+'** operator convert the statement to string
```js
x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"
```

## convert string to numbers
we can use this built in functions,
<ol>
    <li>parseInt: it takes based paramaters parseInt('101', 2) // 5 </li>
    <li>parseFloat</li>
</ol>
**An alternative is using + (unary plus) operator***

```js
'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literals

### Integer literals
integer literals can be written in decimal, hexadecimal(base 16), octal(base 8) and binary(base 2).
<ul>
    <li> A decimal is a sequence of digits without 0 (zero) </li>
    <li> leading 0 (zero) indicates that it is octal. (015 => 13, 020 => 16) </li>
    <li> leading 0x indicates hexadecimal (0x16 => 22, 0x20 => 32,0xF => 15)
    <li> a leading 0b indicates binary (0b101 => 5)
</ul>

### Floating-points literals
syntax of floating points
[digits].[digits][(E|e)[(+|-)]digits]

<b> e is important for exponential part </b>

```js
3.1E+4 // 31000
1e+4 // 10000
5e+5 // 500000
```

### Object literals
Object literal is a list of zero or more pairs of property names and associated values of an object.

<li> We can use numeric, empty string or special character </li>
<b> if the name is not valid you have to use array-like notation ("[]") </b>

```js
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };
console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
// ----------------------------------------
var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!
```

### Enhanced Object Literals
We can use shorthand for foo:foo assignment . we can override Object method ;

```js
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return 'd ' + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

### ====> Summary
```
 -> undefined is converted NaN when used in numeric context.
 -> we can use unary operation for string to number
         +('45'+'50') // number 4550
         45 + 'temp' // string 45temp
 -> Integer literals
        * decimal without beginning 0
        * octal, leading o (zero) 015 => 13
        * hexadecimal,leading 0x, 0x16 => 22, 0xF => 15
        * binary leading 0b , 0b101 => 5
 -> e is important for exponential
        3.1E+4 // 31000
        1e+4 // 10000
        5e+5 // 500000
 -> Object can be empty, number or special character
```