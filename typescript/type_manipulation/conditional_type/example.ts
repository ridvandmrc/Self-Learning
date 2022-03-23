//! extends is keyword of conditional type section

type myName = 'myType'

type conditional = myName extends 'myType' ? string : number //* type will be string

type conditional2 = myName extends number ? HTMLElement : string //* also type will be string

//* ******************************************************************

interface Animal {
  live(): void
}

interface Dog extends Animal {
  woff(): void
}

interface Human {
  talk(): void
}

type firstType = Dog extends Animal ? string : number // * type will be string

type secondType = Human extends Animal ? string : number //* type will be number 


//! DONOT USE THIS, INSTEAD OF DOING THIS DEFINE TWO DIFFERENT TYPE