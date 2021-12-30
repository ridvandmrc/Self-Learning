## Details of the object model
JavaScript is an object-based language based on prototypes.

### Class-based vs. prototype-based languages
Class-based object-oriented languages.
* A class defines all off the properties that characterize a certain set of objects. A class is abstract rather than any particular member in a set of objects it describes.
* An instance, on the other hand, is the instatiation of a class.

A prototype-based language, such as JavaScript does not have  distinction: it has object.

``
Prototype based language has class and instance same. not distance. 
``

### Defining a class

in class-based languages, we define a class in a separate definition. We use  the ***new*** operator with a constructor function to create a new object.

Javascript fallows a similar model, but does not have class definition separate from constructor. We use th ***new*** operator with a constructor function to create a new object.

### Summary of differences
| Category    | Class-based | Prototype-based |
| ----------- | ----------- | ----------- |
| Class vs. Instance      | Class and instance are distinct entities. |All object can in inherit from other object |
| Definition  | Define a class with a class definition; instantiate a class with constructor methods | Define and create a set of objects with constructor functions. |
| Construction of object hierarchy | Construct an object hierarchy by using class definitions to define subclasses of existing classes. | Construct an object hierarchy by assigning an object as the prototype associated with a constructor function. |
| Inheritance Model | Inherit properties by following the class chain. | Inherit properties by following the prototype chain. |

### JS Example (Employee)

* Create Employee class

```js
class Employee {
  constructor() {
    this.name = '';
    this.dept = 'general';
  }
}

// use this instead
function Employee() {
    this.name = '';
    this.dept = 'general';
}

// create Manager class
function Manager() {
  Employee.call(this);
  this.reports = [];
}

// inherit it from Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;
```