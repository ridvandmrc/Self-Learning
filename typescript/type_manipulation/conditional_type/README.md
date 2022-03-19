## Conditional Types

* Sometimes we have to make decisions based on input. *** Conditional types*** help us to describe the relation between the types of input and outputs.

```ts
type myName = 'myType';

type yourName = myName extends 'number' ? string : number;
// type of your name is number

type secondName = myName extends 'myType' ? string : number;
// type of second name is string

// ----------------------------------------------
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string;
        
// type Example1 = number
 
type Example2 = RegExp extends Animal ? number : string;

// type Example2 = string
```

* we can explain this approach like that;

``
SomeType extends OtherType ? TrueType : FalseType;
``

* Another example of conditional type: 

```ts
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

  // then we can use conditional type to simplify...

  function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
 
let a = createLabel("typescript"); // NameLabel
 
let b = createLabel(2.8); // IdLabel
   
 
let c = createLabel(Math.random() ? "hello" : 42); // NameLabel | IdLabel
```
### Conditional Type Constraints

* Sometimes, conditional type will provide us with some new information. Just like narrowing with type guards can give us more specific type.

* let's check fallowing example

```ts
type MessageOf<T> = T["message"];
// Error "message" cannot be used to index type 'T'
// In this example, Typescript errors because T isn't know to have a property called message. We could constrain T, and TS would no longer complain:

type MessageOf<T extends { message: unknown }> = T["message"];
 
interface Email {
  message: string;
}
 
type EmailMessageContents = MessageOf<Email>;
// EmailMessageContents = string
```
