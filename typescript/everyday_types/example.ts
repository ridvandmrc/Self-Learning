// Some important types
// primitive types boolean, string and number
// number [] and string [] for array types

// any for every type
let obj: any = { x: 0 };

// Functions

// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

function getFavoriteNumber(): number {
  return 26;
}

// Anonymous Functions

const names = ["Alice", "Bob", "Eve"];

names.forEach(item => console.log(item));

// Object types

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Union types

const printId = (id: number | string) => {
  console.log("Your ID is :" + id);
};

/* const printId2 = (id: number | string) => {
  console.log("Your ID is :" + id.toUpperCase()); // give an error that toUpperCase' does not exist on type 'string | number
}; */

// we can solve this like;

function printId3(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// Type Aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Interface
// this is other way to define type

interface PointWithInterface {
  x: number;
  y: number;
}

const printCoordWithInterface = (pt: PointWithInterface) => {
  console.log(`x: ${pt.x} y:${pt.y}`);
};

// compare between interface and union type

// Extention

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
const getBear = (): Bear => {
  return { name: "bb", honey: true };
};

// ---------------------------------

type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: boolean;
};

const getBear2 = (): Bear2 => {
  return { name: "bb", honey: true };
};

// re-used again

interface Bear {
  surname: string;
}

// give an error that dublicated
/* type Bear2 {
    surname:string
} */

// Type Assertions
// sometimes we are able to know the type but TS not know it

const canvas = document.querySelector(".main-canvas") as HTMLElement;

// const x = "hello" as number; // give an error like not convert

// Sometimes type convertion might be complicated

// const a = (expr as any) as T

// Literal, string and number
let x: "hello" = "hello";
x = "hello";

// x = "howdy"; // give an error

// Null assertion

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }