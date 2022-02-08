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