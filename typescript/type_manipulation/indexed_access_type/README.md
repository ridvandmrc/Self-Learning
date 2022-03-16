## Indexed Access Types

* We can use an ***indexed access*** type to look up specific prototype on another type:

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
// typeof Age is number
```

* The indexing type is itself a type, so we can use unions,**keyof** or other types entirely:

```ts
type T1 = Person["name" | "age"]; //string | number
type T2 = Person[keyof Person]; // string | number | boolean

type AliveOrName = "alive" | "name";
type T3 = Person[AliveOrName]; // string | boolean
```

