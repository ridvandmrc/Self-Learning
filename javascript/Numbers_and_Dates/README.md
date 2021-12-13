## Numbers

the Number type has three symbolic values:
* +Infinity
* -Infinity
* Nan (not-a-number)

### Decimal numbers
Decimal numbers based on 10. 

Note: 

decimal literals can start with zero but if every digit after the leading
***0*** is marted than 8, it will evaluate by ***octal***

```js
0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)
```

### Binary numbers
Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B). If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown: "Missing binary digits after 0b".

```js
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

### Octal numbers
Octal number syntax uses a leading zero, if the digits after 0 are outside the range between 0 and 7.

```js
var n = 0755; // 493
var m = 0644; // 420
```

### Hexadecimal numbers
start with 0x,
```js
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Exponentiation

```js
1E3   // 1000
2e6   // 2000000
0.1e2 // 10
```
### Number object
The built-in Number object has properties for numerical constants.

Some builtin  values,

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
var Number.EPSILON; // 	Difference between 1 and the smallest value greater than 1 that can be represented as a Number (2.220446049250313e-16)
var Number.MIN_SAFE_INTEGER // Minimum safe integer in JS
var Number.MAX_SAFE_INTEGER // Maximum safe integer in JS.
```
Some built-in methods;

| Method      | Description |
| ----------- | ----------- |
| Number.parseFloat() | take string, return floating point |
| Number.parseInt() | take string, return integer |
| Number.isFinite() | Determines whether passed value is a finite number |
| Number.isInteger() | Determines whether passed value is a integer number |
| Number.isNaN() | Determines whether passed value is a NaN |
| Number.isSafeInteger() | check if value is safe integer |

number prototype has some methods,
```js
const num = 1.15;
num.toFixed(); // return before fraction ==> 1
num.toExponential() // return fractional ==> 1.15e+0
const num1 = 1.15000;
num1.toPrecision(); // return fixed-point notation ===> 1.15
```

### Math 

there is a lot of math build-in function like (PI, sin, sqrt). 
[here all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#math_object)

### Date Object

Js does not have a date data type. but we can use the Date object...
and it also have large number of methods

you can see docs for [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object)