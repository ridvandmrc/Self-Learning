// ? typeof return type of target value

console.log(typeof 'hello') // prints string

// * this is not useful
//* we should use returnType
// * returnType is returning type and using in type
// * it can be used with function

type T = ReturnType<() => boolean>

type predicate = (x: unknown) => boolean

type K = ReturnType<predicate> // K is boolean

// *

function foo() {
  return { x: 3, y: 4 }
}

// type P = ReturnType<foo> // foo is referring value we should use it with typeof

// ! Remember: type and value are not same things, if we are using value, we should use typeof before this.

function getName(name: string): string | number | "name" {
  return name
}

type funcType = ReturnType<typeof getName>

const f:funcType = "name"

// ! ReturnType is using with function