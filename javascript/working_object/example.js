// object associate with key (name) and a value.

// one sample for sample
const country = { name: "greek", population: 1e6 };

console.log(country);

// Enumarate propery

for (let i in country) {
  // traverse an object
  console.log(i + ": " + country[i]);
}

console.log(Object.keys(country)); // return object keys
console.log(Object.getOwnPropertyNames(country)); // return object keys

// Create a construction function

function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

const myCar = new Car("hundai", "i30", "2015");

console.log(myCar);

// create object by using Object.create

const Animal = {
  type: "Invertebrates",
  display: function () {
    console.log(this.type);
  }
};

Animal.display();
const fish = Object.create(Animal);
fish.type = "fishes";
fish.display();

// Using general function
function sayHi() {
  console.log("hello, my Role: ", this.name);
}

const Manager = {
  name: "john",
  age: 27,
  job: "Software Developer"
};

Manager.sayHi = sayHi;

Manager.sayHi();

// Defining getter and setter

const o = {
  a: 7,
  get b() {
    return "Value of a: " + this.a;
  },
  set c(x) {
    this.a = x;
  }
};

console.log(o.b);
o.c = 1;
console.log(o.b);
