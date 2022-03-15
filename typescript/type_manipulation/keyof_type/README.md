## Keyof Type Operator

* The **keyof** operator takes an object type and produce a string or numeric literal union of its keys.

```ts
// type of P is x | y
type Point = { x: number; y: number };
type P = keyof Point;
```

* If the type has a **string** or **number** index signature, **keyof** will return those types instead:

```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // type A is a number
    
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // M is a string

// M is string | number - this is because JS object keys are always coerced to a string 
```