 ## Generics

 * When we begin to use generics, we will know that the compiler will enforce that we use any generically that we use generically typed parameters. 

 ```ts
 function identity<Type>(arg: Type): Type {
  return arg;

  // if we want to log the length of type arg to console
  
  arg.length // length does not exist on type 'Type'
}
 ```

 * when we try to do this, the compiler will give us an error that we're using the **.length** member of arg.

 * let's say to function that this function works on arrays of **Type**.

 ```ts
 function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
 ```

 ### Generics For interface
 * Beside the function we can make interface generic and also we can create our Dictionary.

 ```ts
 interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
 ```

 ### Generic Classes
 * class has a similar shape to a generic interface. We can define it with angle brackets **<>**.

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

### Generic Constraints
* Sometimes, we need to work on set of types. and we want to have some special function or attribute. 

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length); //Property 'length' does not exist on type 'Type'.
  return arg;
}
```

* instead of working with any all type, we'd like to constrain this function to work with any and all type.

* We can create an interface that describes our constraint. 
* and we can use ***extends*** keyword

```ts
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// loggingIdentity function will not work any of type
loggingIdentity(3);
//Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

### Using Type Parameters in Generic Constraints
* we can declare a type parameter that is constrained by another type parameter. 
* we would like to ensure that we're not accidentally grabbing a property that does not exist on the **obj**, so we'll place a constraint between the two types:

```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

```
