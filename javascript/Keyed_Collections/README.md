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
