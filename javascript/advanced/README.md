## Inheritance and the prototype chain
JS can be complicated to imagine ***OOP***. JS has only one construct: object. Each object has a private property which holds a link to another object called its ***prototype***.

### Inheriting with the prototype chain

JS objects are dynamic "bags" of properties (referred to as **own properties**). JS object have a link to a prototype object.

Let's create an object by using **function**.

```js
// Let's create an object o from function F with its own properties a and b:
let F = function () {
   this.a = 1;
   this.b = 2;
}
let o = new F(); // {a: 1, b: 2}

// add properties in F function's prototype
F.prototype.b = 3;
F.prototype.c = 4; // added new paramater to 'o' object
```

## Strict Mode
JS introduced strict mode in ECMAScript 5,is a option to restricted variant of Javascript.

### Strict Mode makes several changes to normal JavaScript semantics:
* Eliminates some JS silent errors
* Fixes mistakes that make it dificult for JS engines
* Prohibits some syntax likely to be defined in future.

## Javascript Typed arrays
In Js array object grow and shrink dynamically. JS engines perform optimizations so tat these arrays are so fast.

### Buggers and views: typed array architecture

let us know how to calculate size of array in JS.

* Array buffer kept 16 bytes (let's call cluster)
* uint8Array keep one cluster for each index
* uint16Array keep 2 cluster for each index
* uint32Array keep 4 cluster for each index
* uint64Array keep 6 cluster for each index

![](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/typed_arrays.png)