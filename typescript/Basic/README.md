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