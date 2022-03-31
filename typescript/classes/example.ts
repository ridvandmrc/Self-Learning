//! we can define readonly variable in Class

class Greeter {
  readonly name: string = 'world'
  constructor(otherName?: string) {
    this.name = otherName // ? this works
  }

  setName() {
    //  this.name = 'test ' //! this does not work
  }
}

//! Getters and Setters  we can use getters and setters different way

class C {
  private _name: string = 'Unknown'

  get name(): string {
    return `Name: ${this._name}`
  }

  set name(value: string) {
    this._name = value
  }
}

const test = new C()
console.log(test.name) //? will return 'Name: Unknown'

//! Index signature, we can define Index Signature

class MyClass {
  [s: string]:
    | string
    | ((s: string) => string)
    | ((key: string, val: string) => string)

  getVal(val: string) {
    return this[val] as string
  }

  setVal(key: string, val: string) {
    return (this[key] = val)
  }
}

const testClass = new MyClass()

testClass.setVal('name', 'ridvan')
testClass.setVal('surname', 'Demirci')
testClass.getVal('name')
testClass.getVal('surname')

//! Arrow Function, It has some trade-off
//? this value is guaranteed to be at runtime, even for code not checked with TS.
//? This will use memory
//? we can not use super.ArrowFunction

class MyClass2 {
  name = 'MyClass2'
  getName = () => {
    return this.name
  }
}
const c = new MyClass2()
const g = c.getName
// Prints "MyClass" instead of crashing
console.log(g())

//! Parameter Properties
//? Typescript offers special syntax for using constructor variable to class variable

class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
  ) {
      // body is not necessary
  }
}
