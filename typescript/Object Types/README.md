## Object Types

### Property Modifiers
Each property in an object can specify a couple of things: that can be optional.

#### **Optional Properties**
sometimes we want to mark some attribute as optional we can do this by using **?** (question mark)

```ts
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
 
function paintShape(opts: PaintOptions) {
  // ...
}
```

### **readonly** Properties
we can mark a property as **readonly**. 

```ts
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  obj.prop = "hello"; // Error 'prop' is readonly 
```

we can use **readonly** for expectataion and some restriction.

```ts
interface Person {
  name: string;
  age: number;
}
 
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
 
let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
 
// works
let readonlyPerson: ReadonlyPerson = writablePerson;
 
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```

### Index Signature

Sometimes we don't know all the names of a type's properties ahead of time, we are able to know shape of the values.

In this case we can use **Index Signature**.

```ts
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```

For Above sample, we have **StringArray** interface which has an index signature. let's describe this **[index:number]:string**,:

String Array indexed with a **number**, it will return a **string**. 

Note:
``An Index signature propery type must be either 'string' or 'number' ``.

we can describe **dictionary** by using index signature.

```ts
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
/* Property 'name' of type 'string' is not assignable to 'string' index type 'number'.*/
}
```

```ts
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
 // and also we can make property --readonly--.

 interface ReadonlyStringArray {
  readonly [index: number]: string;
}
 
let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory"; // Error 
```

### Extending Types

This feature also have all OOP languages. Core prenciple of OOP.

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

```ts
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

### Intersection Types

**Interface** allowed us to build up new types from other types by extending them. TS provides another construct called **intersection** that mainly used combine existing object.

we can use ***&*** operator intersection.

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

```ts
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}
 
// okay
draw({ color: "blue", radius: 42 });
 
// oops
draw({ color: "red", raidus: 42 });
```

### Generic Object Types.

Let's imagine a **Box** type can contain any value - ***string,numbers and etc***
```ts
interface Box {
  contents: any;
}
```

It works, but can lead to accidents down the line.

and also we can use **unknown**, then we need to **narrowing type**.

```ts
interface Box {
  contents: unknown;
}
 
let x: Box = {
  contents: "hello world",
};
 
// we could check 'x.contents'
if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}
 
// or we could use a type assertion
console.log((x.contents as string).toLowerCase());
```

Another and safer way is (But weird)...

```ts
interface NumberBox {
  contents: number;
}
 
interface StringBox {
  contents: string;
}
 
interface BooleanBox {
  contents: boolean;
}

// But we need to function overload
function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

```

Instead this solutions, we can make a *generic* ***Box*** type.

```ts
interface Box<Type> {
  contents: Type;
}
```

type will be replaced that given type in compile time.

 ```ts
 interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}
 
let boxA: Box<string> = { contents: "hello" };
boxA.contents;
 ```
Then, we can use type Alias.

```ts
type Box<Type> = {
  contents: Type;
};
```

we can define some kind of a helper types.

```ts
type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
```

### The ***Array*** Type

Whenever we write out types like ***number[] or string[]***, that's really just shorthand for ***Array< number > and Array< string >***.

```ts
function doSomething(value: Array<string>) {
  // ...
}
 
let myArray: string[] = ["hello", "world"];
 
// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```

let's define ***Array interface***

```ts
interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;
 
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;
 
  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;
 
  // ...
}
```

### ReadonlyArray Type

The ***ReadonlyArray*** is a special type that describes arrays that shouldn't be changed.

```ts
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...but we can't mutate 'values'.
  values.push("hello!");
// Property 'push' does not exist on type 'readonly string[]'.
}
```

### Tuple Types

A *Tuple* another sort of ***Array*** type that knows exactly how many elements it contains, and exactly which type it contains at specific positions

```ts
type StringNumberPair = [string,number]

function doSomething(pair: [string, number]) {
  const a = pair[0];
       
const a: string
  const b = pair[1];
       
const b: number
  // ...
}
 
doSomething(["hello", 42]);
```

maybe we want to interested in is that tuples can have optional properties by writing ***?*** after element's type.

```ts
type Either2dOr3d = [number, number, number?];
 
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
              
const z: number | undefined
 
  console.log(`Provided coordinates had ${coord.length} dimensions`); // length : 2 | 3
}
```

Also we can use tuple destrecture.

```ts
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
```

### ***readonly*** Tuple Types

last Object type topic is readonly tuple, actually it has same meaning with other ***readonly*** properties.

```ts
function doSomething(pair: readonly [string, number]) {
  // ...
}

function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
// Cannot assign to '0' because it is a read-only property.
}
```
