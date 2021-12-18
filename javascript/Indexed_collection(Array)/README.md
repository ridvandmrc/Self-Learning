### Indexed collections

### Array Object
JS does not have an explicitly array data type. However we can use predefined ***Array*** object.

### Creating an Array
we can create equivalent arrays.
```js
let arr = new Array(element0, element1, ..., elementN)
let arr = Array(element0, element1, ..., elementN)
let arr = [element0, element1, ..., elementN]
```

* Bracket syntax called "Array literal" or "Array initializer". it's shorter and generally preferred.

To create an array with non-zero, but without any item, fallowing can be used.

```js
// This...
let arr = new Array(arrayLength)

// ...results in the same array as this
let arr = Array(arrayLength)

// This has exactly the same effect
let arr = []
arr.length = arrayLength // !!!!!

```

we can use array methods in squared-braced ('[]').
```js
let arr = ['one', 'two', 'three']
arr[2]          // three
arr['length']   // 3
```

### Populating an Array

we can populate array several ways.
```js
let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'
```

***Note:***
 
    if we use non integer value, keys are created but we can use like object property.

```js
let arr = []
arr[3.4] = 'Oranges'
console.log(arr.length)                 // 0
console.log(arr.hasOwnProperty(3.4))    // true
```

### Understanding Array length

JS array actually store their elements as standard object properties, using the array index as the property name.

***length*** property special.  it always returns the last index ***plus*** one.

```js
let cats = []
cats[30] = ['Dusty']
console.log(cats.length) // 31
```

* also, we can also assign to ***length*** property.

    Writing a value that is shorter than the number of stored items truncates the array. Writing ***0*** empties it entirely:

```js
let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0
console.log(cats)  // logs []; the cats array is empty

cats.length = 3
console.log(cats)  // logs [ <3 empty items> ]
```

### Array Methods