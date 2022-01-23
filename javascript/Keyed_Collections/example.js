// Keyed Collection refer to Map and Set

const arr = [
  { country: "Turkey", capitalCity: "Ankara" },
  { country: "Italy", capitalCity: "Roma" },
  { country: "Spain", capitalCity: "Madrid" }
];

for (let { country, capitalCity } of arr) {
  console.log(country + ": " + capitalCity);
}

const saying = new Map();
saying.set("dog", "woff");
saying.set("car", "meoww");
saying.set("donkey", "aii");

console.log(saying.size);
console.log(saying.get("dog"));
console.log(saying.delete("dog"));
console.log(saying.has("dog"));

for (let [key, value] of saying) {
  console.log(key + ": " + value);
}

// map can accept any type for key
// map have a size method
// not clear insertion order
