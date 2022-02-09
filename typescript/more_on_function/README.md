## More on Functions

There are several ways to describe how to called TS function.

### Function Type Expressions
* simplest way to describe a function is with a **type expression**.

**fn: (a:string) => void**: meaning is that function will called with a string parameter

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

And of course we can use **type alias** 

```ts
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

### Call Signatures

Sometimes we need to call function with some properties we can describe this like;

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

## Generic Function

If we want to declare a correspondence between two values. We can handle this by using generic.

And also we define it in function signature.

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
```

### Inference

Some basic sample we don't have to specify type because TS inference it automatically.
 
 Below example refer this;

 ```ts
 function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
 ```

 ### Constraints

 some written function can work any kind of value, but some case we want to relate two separate function 

 let's write a function by constrain ***length*** of parameter.
 we can do this by using ***extends*** keyword.

 ```ts
 function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
 ```

* We constrained **Type** to ***{length: number}***, we were allowed to access the ***.length*** property of the **a** and **b** parameters.

* without constraint, we wouldn't be able to access those properties the values might have been some other type without length property.

* Finally, the call to **longest(10, 100)** is rejected because the **number** type doesn't have a **.length** property.

### Specifying Type Arguments

typescript can usually infer the intended type arguments in a generic call, but not always. let's think this function.

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```
it wold be an error to call mismatched arrays:

```ts
const arr = combine([1, 2, 3], ["hello"]);

// string is not assignable to type 'number'
}
```

if we want to remove this error, we can manage it specify ***Type***:

```ts
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

### Guidelines for writing Good Generic Functions

Writing a generic functions is fun, and it can be easy to ger carried away with type parameters.

#### Push Type Parameters Down

```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
```

firstElement1 is much better because TS inferred return ***Type***. firstElement2's infered return type is ***any***.

#### Use Fewer Type Parameters

```ts
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
 
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

We've created a type parameter ***Func*** that relate two values. This is a always red flag, it means callers wanting to specify type of arguments have to manually specify an extra type argument. ***Func*** doesn't do anything but make the function harder to read.

``Always use a few parameters as possible``.

#### Type Parameters Should Appear Twice

Sometimes we forget that a function might not need to be generic:

```ts
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("world");

// it is equal 
function greet(s: string) {
  console.log("Hello, " + s);
}

```

### As A Summary
* Push type Paramaters Down (don't extends from any)
* Use fewer Type Paramaters
* Type paramaters should Appear twice


### Optional Parameters

Functions in JS often take a variable number of arguments. Also, sometimes we can make a paramater as optional by using ***?***.

```ts
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

Although the parameter is specified as type ***number***, the x parameter will actually have the type ***number | undefined*** because unspecified parameters in JS get value ***undefined***.

we can provide default parameter.

```ts
function f(x = 10) {
  // ...
}
```

### Function Overloads
Some times we want to have variation of same function. To provide this we need to ***overload*** function.

In order to overload a function, we need to change function signature:
* paramater count
* paramater type
* paramater order

let's look at the TS example:

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3); // give an error due to not have like this function
```

### Overload signature and the implementation signature

user can see the signature they can not see the body of function.

```ts
function fn(x: string): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments
fn();
```

signature must be ***compatible*** with overload signatures.

```ts
function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string): void;
// This overload signature is not compatible with its implementation signature.
function fn(x: boolean) {}

function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;
//This overload signature is not compatible with its implementation signature.
function fn(x: string | number) {
  return "oops";
}
```

### Writing Good Overloads

Like generics, there are a few guidelines we should follow when using function overload.

let's think about this function.

```ts
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

This function seems fine but what about conditional case ? 

```ts
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]); /* error Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.*/

// this would be better solution 
function len(x: any[] | string) {
  return x.length;
}
```

### Declaring ***this*** in a Function
Some case we should have ***this*** attribute, TS allow us to manage it

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

### Other Types to Know About

#### ***Void***
***void*** represents the return value of function which don't return a value. it's infrred type any time.

and also ***void*** and ***undefined*** referred same thing..

#### ***Object***

The special type ***Object*** refers to any value that isn't primitive.

``object is not Object, use object``

### ***unknown***
The ***uknown*** type represents any value. This is similar to ***any*** type, but is safer because it's not legal to do anything.

```ts
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b(); // Object is of type 'unknown'.

```

we can use ***unknown*** to describe that accept any value .

```ts
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
 
// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
```

### ***never***

Some functions ***never*** return a value:

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

## Rest Parameters and arguments

### Rest Parameters

We can also define functions that take an ***unbounded*** number of arguments using.

A rest parameter appears after all other parameters, and uses the ***...*** syntax:

```ts
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

### Rest Arguments

we can provide a variable number of arguments from an array using the spread syntax.

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
```

Note:
  we can do array immutable by using ***const***.

```ts
// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);
```

## Parameter Destructuring

```ts
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
// ------------------------
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

## =======> SUMMARY
* Simplest way to define function: ***(a:string) => void***
* using alias ***type fn = (a:string) => void***
* If we want to correspandence between two values. We should use.
* Constraints: we can constraint the type by using ***extends***
```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
```
* For good Generic function
  * Push type parameters down (do not use any)
  * Use fewer type parameters
  * prevent overkill, use generic if type appear more than one

* Function Overloads, function signature
  * parameter count
  * parameter types
  * parameter order
```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
```
* for overloding functions shoud be compatable each other 
* user do not know body implemantation, they only now signature