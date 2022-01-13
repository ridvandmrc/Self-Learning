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

Apart from primitives, Object is most used type. This refers to any JS value with properties.

for example,
```js
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

we can use ***,*** or ***;*** to separate the properties, and the last separator is optional.

If we do not specify a type, it will be assumed to be ***any***.

## Optional Properties

we can also define ***optional*** properties. we can provide this by using ***?***.

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

## Union Types

Ts allow us to define new types out of existing ones using a large variety operators. 

Let's see to combine types other ways.

we will use pipe (|) operator to combine several types.

```ts
// id accept only number and string
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

if we try to use object with ***printId***, we will get an argument error.

```ts
printId({ myID: 22342 });
/* Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
  Type '{ myID: number; }' is not assignable to type 'number'. */
```

it is easy to define union type but problem is that how do we work with it?

TS only allow us to do things if that thing valid for ***every*** member of the union.

if we have the union ***string | number***, we can not use methods that are only available on string.

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase());
/**Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.*/
}
```

solution is to narrow the union with code,  we can use ***typeof***, for string;

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

we can use isArray function for Array, (Array.isArray()).

```
Note:
    sometimes, we are able to have common function for example, both array and string have a slice method.
```

```ts
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

## Type Aliases

Now, we've already knew how we combine types by using '|', this is convenient, but what about if we want to use this type more than once?
answer is ***Aliases***.

```ts
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

Actually, not only object type, we can also use primitive type

```ts
type ID = number | string;
```

## Interface

Interface declaration is another way to name an object type.

```ts
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

this is exactly same with ***Aliases***.

### Differences between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases we can choose between them freely. Almost all features of an ***interface*** are available in ***type***, the distinction is that a type cannot be re-opened to new properties.

comparison;

```ts
// extends for interface,
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```

```ts
// extends for Type Alias
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```

* We can extends interface and type Alias but we can not add new attribute to ***type Alias***.

extends for interface,

```ts
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// try to extends for type alias, it's throwing exception
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.

```

## Type Assertions

sometimes, we have already know type about a method or something.

For example, if we are using ***document.querySelector***, TS only know that this will return ***HTMLElement***, but it might be return ***HTMLCanvasElement***