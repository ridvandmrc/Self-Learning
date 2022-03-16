## Typeof Type Operator

### The **typeof** type operator

* Javascript already has a **typeof** operator, we can use this.

```ts
console.log(typeof "hello"); // prints string
```

* This isn't very useful for basic types, but we can combined this with other type .

* Let's look at the **ReturnType<T>**. it takes a function type and produce its return type.

```ts
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// type of k is boolean
```

* if we try to use **ReturnType** on a function name, we see an instructive error:

```ts
function f(){
    return {x:10, y:3};
}

type P = ReturnType<f>;

// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

```

``
Note: Remember that values and types aren't the same thing. To refer to the type that the value f has, we use typeof
``
```ts
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
/*
    Type of P is...
    type P = {
    x: number;
    y: number;
}
*/
```