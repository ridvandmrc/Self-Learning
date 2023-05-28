### Prototype

- **Prototype** is base of inheritance.
- Inheritance is using **class** in class base inheritance.
- In **Javascript** inheritance is base **prototype**
- We can derive and add method or new object by using **prototype**
- **Prototype** is added automatically when create a new function

```tsx
const removeEven = function () {
  return this.filter((data) => data % 2 !== 0);
};

const arr = [1, 2, 3];

Array.prototype.removeEven = removeEven;

console.log(arr.removeEven());
```
