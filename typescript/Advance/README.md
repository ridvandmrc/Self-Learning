### Infer

- **Infer** keyword in **TS** is used to extract the type of a variable or expression from a conditional type.
- This can be useful for a variety of purposes such as;
  - **Determining** the return type of a function
  - **unpacking** the elements of an array or tuple.
  - **Checking** the type of a property in an object

```ts
type getType<T> = T extends (infer R)[] ? R : never; // this gets types in array
type Includes<T extends any[],U> =
T extends [infer F, ...infer R]?
Equal<U,F> extends true?true:Includes<R,U>:false,
```

### Never

- **Never** type generally uses if we don't like type :D,
- Or the, type is not possible to happened

```ts
type myExclude<T, K> = T extends K ? never : T;
type myExtract<T, k> = T extends K ? T : never;
type FlatArray<T extends any[]> = T extends (infer R)[] ? R : never;
type FlatObj<T extends Object> = keyof T;
```

### Advance Typescript

- we can create type that is advance in **Typescript**.
- such as **key of object**, **mapped type**
- I will create sample **ts** file.

```ts
interface IPerson {
  name: string;
  age: number;
  sex: "male" | "female";
}

type myOmit<T extends Object, K extends keyof T> = {
  [Prop in Exclude<keyof T, K>]: T[prop];
};

type myPartial<T extends Object> = {
  [Prop in keyof T]?: T[Prop];
};
```
