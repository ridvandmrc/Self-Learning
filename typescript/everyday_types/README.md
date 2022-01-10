# Everyday Types

we will see some of the most common types. Types can also appear in many more places than just type annotations. 
let's see the most common types.

## The primitives: string, number and boolean

JS has three commonly used primitives: ***string***, ***number*** and ***boolean***.

If we want to learn  type of variables, we can use ***typeof*** operator.

``
String, Number and Boolean (starting with capital letters) are legal, but refer to some special build-in type
``

## Array

To specify the type of an array like [1, 2, 3], we can use the syntax ***number[]***; like (***string[]*** array of string), we can see this written as ***Array<number>*** they are same thing, ***T\<U>*** for generics.

string [] === array<string>

## any

TS also has a special type, ***any*** that we can use whenever we don't know a type.

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

``
The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
``

Also, if you don't give a type, typescript assign any value as default.

## Type Annotations on Variables

When we declare a variable using ***const***, ***var*** or ***let***, we can optionally add a type annotation to explicitly specify the type of the variable:

```ts
let myName: string = "Alice";
```

``
TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go after the thing being typed.
``

In most cases, though, this isn't needed. Wherever possible, TS tries to automatically ***infer*** the type in our code. 

we can not use type annotation if we initiliaze value.

```ts
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

## Functions

TypeScript allow us to specify the types of both input and output values of functions.

##  Parameter Type Annotations

we can add type annotations after each parameters.

```ts
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

## Return Type Annotations

we can also add return type:

```ts
function getFavoriteNumber(): number {
  return 26;
}
```

Like variable type annotations, you don't need a return type because TS infer the function's return type based on its return statements.

## Anonymous Functions

Anonymous functions are different from function declarations. When a function appears in a place where TS can determine how it's going to be called

Here's an example:

```ts
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

## Object Types
