// this function makes that add margin before string if type is number
// if type is string, only add padding before input
var padLeft = function (padding, input) {
    return " ".repeat(padding) + input;
};
console.log(padLeft(5, "Ridvan"));
// we can not usi this with string
var padLeft2 = function (padding, input) {
    if (typeof padding === "number")
        return " ".repeat(padding) + input; // Narrowing type
    return padding + input; // Narrowed type with string
};
console.log(padLeft2("Demirci ", "Ridvan"));
// In type narrowing type
// In return keys of object
var animals = { name: "dog", behavior: "walk" };
if ("name" in animals) {
    console.log(true);
}
var move = function (animal) {
    if ("swim" in animal) {
        return animal.swim(); // narrow type with Fish
    }
    animal.fly(); // narrow type with  Bird
};
var x = Math.random() < 0.5 ? 10 : "hello"; // type of x = number | string
// x = true; // error not assign
// Using type predicates
// we should use this if want to narrow type directly.
var isFish = function (pet) {
    return "swim" in pet;
};
console.log("is Fish: ", isFish({ swim: function () { return undefined; } }));
console.log("is Fish: ", isFish({ fly: function () { return undefined; } }));
