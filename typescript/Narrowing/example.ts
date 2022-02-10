// this function makes that add margin before string if type is number
// if type is string, only add padding before input
const padLeft = (padding: number, input: string): string => {
  return " ".repeat(padding) + input;
};

console.log(padLeft(5, "Ridvan"));

// we can not usi this with string
const padLeft2 = (padding: number | string, input: string): string => {
  if (typeof padding === "number") return " ".repeat(padding) + input; // Narrowing type

  return padding + input; // Narrowed type with string
};

console.log(padLeft2("Demirci ", "Ridvan"));

// In type narrowing type

// In return keys of object
const animals = { name: "dog", behavior: "walk" };

if ("name" in animals) {
  console.log(true);
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

const move = (animal: Fish | Bird): void => {
  if ("swim" in animal) {
    return animal.swim(); // narrow type with Fish
  }
  animal.fly(); // narrow type with  Bird
};

let x = Math.random() < 0.5 ? 10 : "hello"; // type of x = number | string

// x = true; // error not assign

// Using type predicates
// we should use this if want to narrow type directly.

const isFish = (pet: Fish | Bird): pet is Fish => {
  return "swim" in pet;
};

console.log("is Fish: ", isFish({ swim: () => undefined }));
console.log("is Fish: ", isFish({ fly: () => undefined }));
