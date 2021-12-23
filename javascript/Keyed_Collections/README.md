## Keyed collections
this chapter is related **Map** and **Set**.

### **Maps**
Basic operations with a Map. ***for...of*** loop to return an array of [key,value] for each iteration.
```js
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Object and Map compared

Object have been used to string values. Objects allow us to set keys to values, retrieve those values, delete keys and detect whether something is stored at a key. however have a few more advantages that make them better maps.

 * The keys of an object are Strings or Symbols, where they can be of any value for a ***Map***
 * we can get the size of Map easily, while we have to manually keep track of size for an Object.
 * iteration of maps is in insertion order of elements.

-- When should I chose map or object?
* Use maps over objects when keys are unknow until runtime, and when all keys are the same type and all values are same type.
* use maps if there is a need to store primitive value as keys because object treats each key as a string. 
* use object when there is a logic that operate individual elements.

### WeakMap object
weakMap object is a collection of key/value pairs in which the ***keys are object only*** and the values can be arbitary.

one usecase of ***weakMap*** object is to store private object for an object. or to hide implementation details.

### Set
***Set object***
Set object are collections of value. we can iterate its elements in ***insertion order*** . A value in ***set*** may only occur once; it is unieque in the ***set***'s collection.

```js
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');
mySet.add('foo'); // could not be added

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### Converting between Array and Set

we can create Array from a set using ***array.from*** or ***spread syntax***, Also Set constructor accepts an ***Array*** to convert in the other direction.

``Note: Set objects store unique values—so any duplicate elements from an Array are deleted when converting!``

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);

// one example for remove duplicate element
const element = [1,2,1,1,3,5,6]
set(element); // remove duplicate from array 
```

### Array and set compared
* Deleting Array elements by value (arr.splice(arr.indexOf(val),1)) is very slow.
* ***set*** let us delete elements by their value.
* the value ***NaN*** cannot be found with indexOf in array.

### WeakSet object
Differences between set and WeakSet;
* In contrast to Sets, WeakSets are ***collections of object only*** and not of arbitary values of any type.
* weakset are not ***enumerable***.
* enumrable means, it can be iterated