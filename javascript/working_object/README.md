## Working with Object

Object properties is an association between a name (or key) and a value. property's value can be a function.

The properties of an object define the characteristics of the object. We access the properties of an object with a simple ***dot-notation*** and also properties name are case sensitive.
we can assign value easily.

```js
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

Also we can use ***object initializer*** 

```js
const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
```
Unassigned properties of an object are ***undefined*** (not ***null***)

```js
myCar.color; // undefined
```

We can also use a bracket notation. Property name can be any valid Js string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid identifier can only be accessed using suqre bracket notation. It is very useful to accessed in ***runtime***.

```js
// four variables are created and assigned in a single go,
// separated by commas
const myObj = new Object(),
      str = 'myString',
      rand = Math.random(),
      obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);
```
### Enumarate the properties of an object

There are three native ways to list/traverse object;
* ***for...in*** loops. This method traverses all enumarable properties of an object an its prototype chain.
* ***Object.keys(o)***. This method returns an array with all the own.
* Object.getOwnPropertyNames(o). this method returns an array containing all own properties.

```js
const a = {first:'first',second:'second'}

    for(x in a){
        console.log(x) // first, second
    }

    Object.keys(a); // ['first','second']
    Object.getOwnPropertyNames(o). // ['first','second']
}
```

### Creating new object
We can create an object using  an ***object initializer***. Alternatively, we can create a constructor function and then instantiate an object invoking.

### Using object initializers
```js
const obj = {
  property_1:   value_1,   // property value may be an identifier...
  2:            value_2,   // or a number...
  // ...,
  'property n': value_n    // or a string
};
```

### Using a constructor function

Alternatively, we can create an object with two steps:

* Define object by writing a constructor function. strong convention
* Create an instance of the object with ***new.***

To define an object type, create a function for the object type that specifies its name, properties, and methods.

```js
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

// we should use with ****new***
const myCar = new Car('hundai','i30','2015')
myCar.name // hundai
myCar.model // i30
myCar.year // 2015
```

### Using the ***Object.create*** method
This method can be useful because it allows us to choose the prototype object for the object we want to crate.

```js
// Animal properties and method encapsulation
const Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output: Fishes
```

### Using ***this*** for object references
Javascript has special keyword, ***this***, that we can use within a method to refer to current object.

```js
const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
}
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
}

function sayHi() {
  console.log(`Hello, my name is ${this.name}`)
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is John'
Intern.sayHi(); // Hello, my name is Ben'
```

The ***this*** refers to object that it is in. we can create a new function called ***howOldAmI()*** which logs a sentence sayinh how old the person is.

```js
function howOldAmI() {
  console.log(`I am ${this.age} years old.`);
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI(); // I am 27 years old.
```

### Defining getters and setters
we can define getters and setters on any predefined core object or user-defined.

Getter and setters can be either
* defined using object initializers,
* added later to any object at any time

```js
const o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- At this point the get b() method is initiated.
o.c = 50;         //   <-- At this point the set c(x) method is initiated
console.log(o.a); // 25
```

``
Getter and Setter also can be added after initiated by using ***Object.defineProperties()***
``

```js
const o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6
```
### Deleting Properties

we can remove a non-inheried propery by using ***delete*** operator.

```js
// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a; // delete
console.log ('a' in myobj); // output: "false"
```