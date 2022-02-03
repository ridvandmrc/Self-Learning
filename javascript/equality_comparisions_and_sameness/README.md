## Equality comparisons and sameness
 JS has four type of equality algorithm
 * Abstract Equality Comparision (==)
 * Strict Equality Comparision (===): Userd by **indexOf, lastIndexOf and case-matching**
 * SameValueZero
 * sameValue

JS provide three different value-comparison operators:

* === - strict equality comparison ('strict equality','identity')
* == - abstract equality comparison ('loose equality','double equals')
* Object.is provides SameValue

### Example of Object.is
```ts
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
```

we can see all example [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)