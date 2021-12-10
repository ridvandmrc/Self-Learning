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