const user = {
  name: "Daniel",
  age: 26
};

// user.location // give an error compile time

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}`);
}

greet("Ridvan", "8 March"); // works fine

// greet("ridvan"); // this won't work due to lack of argument

// explicitly type

function greetWithType(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greetWithType('Maddison','8 March') // give an error due to incompatiblity

greetWithType('Daniel',new Date())
