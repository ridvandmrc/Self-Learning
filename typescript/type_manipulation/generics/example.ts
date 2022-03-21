function identity<Type>(arg: Type): Type {
  // arg.length // !Error length does not exist in Type
  return arg
}
// if we use Type as Array []

function logginIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length) // * Not an error because .length is included in  []
  return arg
}

// GENERIC CONSTRAINTS

// ? if  we want to use specific attribute of generic type, we can extend it

interface lengthType {
  length: number
}

function logginIdentity2<T extends lengthType>(arg: T): T {
  console.log(arg.length) // * not an error because arg already have length
  return arg
}

// ? we can use keyof to use specific types list

interface nameList {
  a: string
  b: string
  c: string
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

let x: nameList = { a: '1', b: '2', c: '3' }

getProperty(x,'a')
