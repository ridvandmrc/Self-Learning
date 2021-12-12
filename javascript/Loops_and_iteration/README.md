## Loops and Iteration

### Labeled statement

It provides a statement with an identifier that lets you refer to it elsewhere in your program. we can use a label to identify a loop with using **break** and **continue**

```js
label:
    statement
// example 
markLoop:
    while(mark){
        doSomething();
    }
```

### break statement
it using to terminate a loop, switch, or in conjunction with a label statement.

* without a label, it terminates enclosing while, do-while,for pr switch immediately.
* with using label, it terminates the specified labeled statement.

```js
break;
break [label];

// one example of breaking with label

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

### Continue statement
continue statement can be used to restart a while, do-while, for or label.

* without using label, it terminates only current iteration for while,do-while or for... in contrast to ***break*** it does not terminate the loop. it skip next iteration.

* with using label, i applies to looping statement identified. 

```js
continue [label];
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
     // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
```
### for...in Statement
it iterates a specified variable over all the numerable properties of an object.

```js
const obj = {country:'Turkey'}
for(let i in obj){
    console.log(`${i} is :${obj[i]}`)
}
```

### Arrays
* for...in: iterates keys of sequence
* for...of iterates values of sequence

```js
const arr = [1,3,5,7,9];
for(let i in arr){
    console.log(i)
}
// logs is 0,1,2,3,4

for(let i of arr){
    console.log(i)
}
// logs is 1,3,5,7,9

```

### ====> Summary
* Label is important to refer specific point
* break terminates the loop and it can be used with label ( break [label])
* continue skip current iteration in loop, it can be used with label continue [label]
* for...in, iterates key of **object**, iterates index of **array**
* for...of, iterates value of **array**