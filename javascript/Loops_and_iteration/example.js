// Loop and Iteration

i = 0;
outer: {
  foo: while (true) {
    i++;
    console.log("This prints:", i);
    if (i < 10) {
      continue foo;
    } else {
      console.log("loop executed");
      break outer;
    }
  }
}

console.log("\n--------------------------\n");

// for.. in statement

const fruits = ["apple", "pine-apple", "melon", "banana"];

for (let i in fruits) {
  console.log(i + ".element is:", fruits[i]); //return Indis of element
}
console.log("\n--------------------------\n");

for (let i of fruits) {
  console.log(i); // returns fruşts
}
console.log("\n--------------------------\n");

const obj = { category: "Animal", type: "Dog", name: "foggy" };

for (let i in obj) {
  console.log(`${i} is :${obj[i]}`); // returns keys
}
console.log("\n--------------------------\n");

/* for (let i of obj) { // of is not iterable
  console.log(i); // returns keys
} */
