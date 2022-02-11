// simplest way to define function ()=>void

// Generic function

// let's think about reverse of number array

const reverseArray = (arr: number[]): number[] => {
  return arr.reduce((prev, next) => [next, ...prev], []);
};

console.log(reverseArray([1, 2, 3]));

// console.log(reverseArray(["john", "doe", "jack"])); // we can not do this for string

// let's use generic

const genericReverseArray = <T>(arr: T[]): T[] => {
  return arr.reduce((prev, next) => [next, ...prev], []);
};

console.log(genericReverseArray([1, 2, 3]));
console.log(genericReverseArray(["john", "doe", "jack"])); // type inferred automatically
console.log(genericReverseArray<string | number>(["john", 3, "jack"]));

// constraints
// sometimes we want function to have some specific attributes
// so that we have to constraint the type

// return greater length

const returnGreater = <T extends { length: number }>(arr1: T, arr2: T): T => {
  return arr1.length > arr2.length ? arr1 : arr2;
};

console.log(returnGreater([1, 2, 3], [1, 2]));
console.log(returnGreater("foo", "fo"));

// addInnerText of element

const addText = <T extends HTMLElement>(element: T): void => {
  element.innerText = "loo";
};

// some guidelines for writing Generic functions
// * push type parameters down
// * use fewer parameters
// * type should appears more than once

// Get Custom event wrapper

const getData = <T extends { detail: U }, U>(e: T): U => {
  const data = e.detail;
  return data;
};

console.log(getData({ detail: 5 }));

// function overload

// we want to create variation of same function
// parameter count
// parameter type
// parameter order

const makeDate = (timestamp: number): Date => {
  return new Date(timestamp);
};

// if we want to make date with (dd,mm,yyy), we should override it

function makeDateOverride(timeStamp: number): Date; // this is signature
function makeDateOverride(day: number, month: number, year: number): Date; // this is signature
function makeDateOverride(
  timeStamp?: number,
  day?: number,
  month?: number,
  year?: number
): Date {
  if (day && month && year) return new Date(day, month, year);
  return new Date(timeStamp);
}

console.log(makeDateOverride(2, 2, 2021));

// currently, overload is not using , we can use union type

// Declaring this in Function

interface IArr {
  reverseIterate(element: (this) => void): void;
}

class Arr<T> implements IArr {
  reverseIterate(element?: (this) => void): void {
    console.log(element);
  }

  data = [1, 2, 3];
}

const arr2 = new Arr();

arr2.reverseIterate();

// unknown: is safer than any, it provide type check

const f1 = (a: any): void => {
  a.b(); // OK For any type
};

const f2 = (a: unknown): void => {
  // a.b(); // not OK
};

// immutable array
// we can provide is by using as const

const arr1 = [1, 3, 5] as const;

// Learn function attributes
