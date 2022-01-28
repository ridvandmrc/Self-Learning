// Some important types
// primitive types boolean, string and number
// number [] and string [] for array types
// any for every type
var obj = { x: 0 };
// Functions
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
function getFavoriteNumber() {
    return 26;
}
// Anonymous Functions
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (item) { return console.log(item); });
// Object types
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Union types
var printId = function (id) {
    console.log("Your ID is :" + id);
};
/* const printId2 = (id: number | string) => {
  console.log("Your ID is :" + id.toUpperCase()); // give an error that toUpperCase' does not exist on type 'string | number
}; */
// we can solve this like;
function printId3(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// Exactly the same as the earlier example
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
var printCoordWithInterface = function (pt) {
    console.log("x: ".concat(pt.x, " y:").concat(pt.y));
};
var getBear = function () {
    return { name: "bb", honey: true };
};
var getBear2 = function () {
    return { name: "bb", honey: true };
};
