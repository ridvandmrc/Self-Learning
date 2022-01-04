## The Basics

### Static type-checking
Most people don't like to get any sorts of errors when running their code- those are considered bugs!. we can avoid this several ways that we might be able to isolate the problem quickly or we might not have tested the feature.

Ideally, we could have a tool that helps us find these bugs before our code runs. That's what a static type-checker like TypeScript does. Static types system describe the **shapes nad behaviors** of what our values will be when ***run our*** programs.

A type-checker like TypeScript uses that information and tells us when th,ngs might be going off the rails.

```ts
const message = "hello!";
 
message();
This expression is not callable.
  Type 'String' has no call signatures.
```

### Non-exception Failures

JavaScript runtime tells us that it thinks something is nonsensical.

For example, the specification says that trying to call something that is not callable should throw an error. that sound's good. in that case,  we are expecting throw error that accessing property that does not exist.
instead, JS gives us different behavior and returns ***undefined***.

```js
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

Ultimately, a static type system has to raise a flag while do that even if it's valid in JS. 
In TS produces an error about ***location*** not being defined:

```ts
const user = {
  name: "Daniel",
  age: 26,
};
 
user.location; // property 'location' does not exist on type
```

```ts
const announcement = "Hello World!";
announcement.toLocaleLowercase();
announcement.toLocalLowerCase(); // Sometimes, It is useful to catch 'typo',

// or catching uncalled function

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5; //Operator '<' cannot be applied to types '() => number' and 'number'.
}

// or basic logic error

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") { // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}

```

### tsc, the typeScript compiler
tsc: the typescript compiler
we need to install this.
``npm install -g typescript``

in case, we made some mistake, tsc will warn us, let's look at this example.

```ts
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");
```

After we run ***ts hello.ts***, we will get error on the command line!

``Expected 2 arguments, but got 1.``

### Explicit Types

Until now, we did not describe type.

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

we added type annotations on person and date to describe what types of value greet can be called with.

```ts
greet("Maddison", Date());
```

Above code give an error, because Date() is returning string type, we should use like that:
```js
greet("Maddison", new Date());
```

Note:

```ts
// we don't always have to write explicit type annotations.
 let msg = "hello there!";
 ```