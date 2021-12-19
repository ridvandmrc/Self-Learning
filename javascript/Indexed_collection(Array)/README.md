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

Array has some methods:

### ***Join***
join(delimiter = ',') joins all elements of an array into a string.

```js
let myArray = new Array('Wind', 'Rain', 'Fire')
let list = myArray.join(' - ') // list is "Wind - Rain - Fire"
```

### ***pop()***

it removes the last element from an array, returns that element

### ***shift***

it removes the first element from an array, returns that element

### ***unshift()***
it adds one or more elements to the front of an array ...

```js
let myArray = new Array('1', '2', '3')
myArray.unshift('4', '5')
// myArray becomes ["4", "5", "1", "2", "3"]
```

### ***splice()***
it removes elements form an array and (optionally) replace them.
```js
let myArray = new Array('1', '2', '3', '4', '5')
myArray.splice(1, 3, 'a', 'b', 'c', 'd')
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

### ***sort()***
sort the elements of an array ***in place***

```js
let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort()
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

sort also can take callback function to determine how array elements compared.

Callback function is called with two arguments, that are array's elements.

one is current element, other is next element.

```js
let sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn)
// sorts the array so that myArray = ["Wind","Fire","Rain"]
```

* if a is less than b, return -1 ( or any negative number).
* if a is greater than b, return 1 ( or any positive number).
* if they are equal, return 0

### ***every()***

returns true if callback return true fır every item in array.
```js
function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.every(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.every(isNumber))  // logs false
```

### ***some()***
returns true, if callback return true for at least one item in the array.

```js
function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.some(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.some(isNumber))  // logs true
let a3 = ['1', '2', '3']
console.log(a3.some(isNumber))  // logs false
```

### ***reduce(callback,initial value)***
the purpose of this method is  reducing the list of items down to a single value.

* initial value is using for first value of accumulator.
* if ***initialValue*** is not specified, then callback's first paramater values will be the first and second elements of the array.
* if callback needs access to the index. or access to entire array, they are available as optional parameters.
```js
let a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(total) // Prints 60
```

### ***reduceRight(callback,initial value)***
 it works like reduce(), but starts with last element.

### ====> Summary
* there are several ways to create array (Array, new Array or [])
* array length calculating like that, last element of index plus one
* some fundamental array methods
    * unshift
    * splice
    * sort(callback , (callback(current,next)))
    * every, return true if all elements are true
    * some, return true if at least one item in the array
    * reduce (callback,initial value), using for reducing the list of items down to a single value