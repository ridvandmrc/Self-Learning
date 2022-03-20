## Classes

### readonly 

* Fields may be prefixed with **readonly** modifier. This prevents assignment to field outside of constructor.
* We can assign a value in constructor even if variable is **readonly**

```ts
class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName; // OK, even if name is readonly
    }
  }
 
  err() {
    this.name = "not ok";
// Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = "also not ok"; // we can not assign
```

### Getters / Setters
```ts
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```
* Typescript has some special inference rules for accessors:
* If **get** exists but no **set**
* If the type of the setter parameter is not **specified**, it is inferred from return type of **getter**
* Getter and Setters must be the **same**

We can intercept value of getter and setter

```ts
class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}
```

### Index Signature
* We can declare index signatures;

```ts
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}
```

### Class initialization Order

Order of initialization is managing by JavaScript
* The base class fields are initialized
* The base class constructor runs
* The derived class fields are initialized
* The derived class constructor runs


### Why No Static Classes ?

* TS don't have a construct called **static class**.
* Others languages force all data and functions to be inside a class
* This restriction does not exist in TS.
* We can provide a single instance without using any **static** annotation

```ts
// we can provide single instance several way
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}
 
// Preferred (alternative 1)
function doSomething() {}
 
// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};
```

### Generic Classes
* Classes, much like interfaces, can be generic. When a generic class is instantiated with **new**, its type parameters are inferred the same wat as in a function call:

```ts
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");
// b: Box<string>
```

### Arrow Functions
* If we have a function that will often be called in a way that loses its **this** context, it can make sense to use an arrow function

```ts
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
```
This has some trade-offs:
* The **this** value is guaranteed to be correct at runtime, even for code not checked with TS.
* This will use memory, because each class instance will have its own copy of each function defined this way
* we can not use **super.getName** in derived class, because there's no entry in the prototype.

### **this** Types

In classes, a special type called **this** refers dynamically to the type of current class.

```ts
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
```

### Parameter Properties
* TypeScript offers special syntax for turning a constructor parameter into a class property with same name and value.
* These are called ***parameter properties*** and are created by prefixing a constructor ...

```ts
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}

const a = new Params(1,2,3)
console.log(a.x); // 
             
console.log(a.z); // z is private
```

### **abstract** Classes and Members

* An abstract ***method or abstract field*** is one that hasn't had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

* The role of abstract classes is to serve as a base class for subclasses which- do implement all that abstract members

```ts
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
```