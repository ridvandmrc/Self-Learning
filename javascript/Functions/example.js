i = 5;
function changeValue(i) {
  i = 4;
}
console.log(i); // return 5

// Nested function

function base(x) {
  return function power(y) {
    return x << y;
  };
}

const bs = base(2);
console.log(bs(5)); // return 64

console.log("\n----------- closure ---------------\n");

const createCity = function (name) {
  let city = name;
  let population = 0;
  return {
    getName: function () {
      return city;
    },
    setPopulation: function (number) {
      population = number;
    },
    getPopulation: function () {
      return population;
    },
    getfunc: function () {
      return this;
    }
  };
};

const istanbul = createCity("istanbul");

console.log(istanbul.getName());
istanbul.setPopulation(50);
console.log(istanbul.getPopulation());

console.log(istanbul.getfunc());

console.log("\n------ Builder pattern with closure ------------\n");

const prepareCoffee = function () {
  const coffee = [];

  return {
    addCaramel: function () {
      coffee.push("caramel");
      return this;
    },
    addSugar: function () {
      coffee.push("Sugar");
      return this;
    },
    addMilk: function () {
      coffee.push("milk");
      return this;
    },
    getCoffee: function () {
      return coffee.join("-") + "-coffee";
    }
  };
};

const coffeeWithMilk = prepareCoffee();
const coffeeWithCaramel= prepareCoffee();
const justCoffee = prepareCoffee();


console.log("\n------ Coffee with milk ------------\n");
console.log(coffeeWithMilk.addCaramel().addMilk().getCoffee());

console.log("\n------ Coffee with caramel and sugar ------------\n");
console.log(coffeeWithCaramel.addCaramel().addSugar().getCoffee());

console.log("\n------ Coffee  ------------\n");
console.log(justCoffee.getCoffee());


// Pre-define Function


