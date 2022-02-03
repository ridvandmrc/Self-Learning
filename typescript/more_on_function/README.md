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

### Working with constrained Value

