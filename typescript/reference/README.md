## Reference

### Util Types
* Typescript provides several utility types to facilitate common type transformations. These utilities are available globally.

### ``Partial < Type >``
* Constructs a type with all properties of ``Type`` set to **Optional**.

### Traditional way

```ts
type Person ={
    name:string;
    surname:string;
}

type OptionalPerson = {
    [Type in keyof Person ]:Person[Type]
}
```
### Referenced way
* we can use ``partial`` to make type optional

```ts
type Person ={
    name:string;
    surname:string;
}

type OptionalPerson = Partial<Person>
```

### ``Required < type >``
* Constructs a type consisting of all properties of ``Type`` set to **required**.

### Traditional way
* when type defined, it will be came **required** as default, but if we want to emphasize it, we can apply fallowing snipped.

```ts
type Person ={
    name:string;
    surname?:string;
}

type RequiredPerson = {
    [Type in keyof Person]-?: Person[Type]
}
```
### Modern way 
* we can use **required** to make type be required.
```ts
type RequiredPerson = Required<Person>
```

### ``Record<Keys,Type>``
* Constructs an object type whose property keys are ``keys`` and whose property values are ``Type``. 

### Traditional way
* This is typically Mapper type

```ts
type Person ={
    name:string;
    surname:string,
}

type Gender = 'male' | 'female'

type People = {
    [type in  Gender]:Person
}
```

### Modern way 
* We can use ``Record`` to define keys and types

```ts
type People = Record<Gender,Person>
```

### ``Pick<Type,Keys>``
Constructs a type by picking the set of properties **Keys** from type

```ts
type Person ={
    name:string;
    surname:string;
    gender:string;
}

type NameSurname = Pick<Person,'name'|'surname'>
```

### ### ``Omit<Type, Keys>``
Constructs a type by picking all properties from **Type** and then removing **Keys**.

```ts
type Person ={
    name:string;
    surname:string;
    gender:string;
}

type NameSurname = Omit<Person, 'gender'>

/* same with below statement
type NameSurname = Pick<Person,'name'|'surname'>
*/

```

### ``Exclude<UnionType, ExcludeMembers>`` union operation
Construct a type by excluding from **UnionType** all union members. 

```ts
// bump example
type gender = 'male' |'female'

type man = Exclude<'male'|'female','female'>

```

### ``Extract<Type, Union>``  union operation
Constructs a type by extracting from **Type** all union members that are assignable to **Union**.

```ts
// bump example
type woman = Extract<'male'|'female','female'>
```

### ``NonNUllable<Type>``
Constructs a type by excluding **null** and **undefined** from **Type**.

```ts
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string []
// exclude null even if defined explicitly
```

### ``Parameters<Type>``
Construct a tuple from the types used in parameters of a function type **Type**.

```ts
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>; // T0 is []
type T1 = Parameters<(s:string) => void> // T1 is[s:string]
type T2 = Parameters<<T>(arg: T) => T>; // T2 is [s:unknown]
type T3 = Parameters<typeof f1>; // T3 is [ærg:{a:number; b:string}]
```

### ``ReturnType<Type>``
Constructs a type consisting of the return type of function **Type**.

```ts
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>; // T0 is string
type T4 = ReturnType<typeof f1>; // T4 is {a:number; b:string;}
```

### String Manipulation Type
* ``Uppercase<stringType>``
* ``Lowercase<stringType>``
* ``Capitalize<stringType>``
* ``Uncapitalize<stringType>``

```ts
type Person = {
    name:string;
    surname:string;
}

type CapitlizePerson = {
    [Type in Capitalize< keyof Person>]:string
}
```


### ========> Summary 
* **Partial<>:** make type be optional
* **Required<>:** Make type be required
* **Record<keys,type>:** crate an object with keys that refer type
* **Pick<Type,Keys>:** create a type selecting by Keys
* **Omit<Type,Keys>:** create a type but eliminate from keys
* **Exclude<UnionType,ExcludeMembers>:** Create a union type excluded from exclude members
* **Extract<Type, Union>:** create union type by intersect between **type** and **union**
* **NonNullable<Type>:** Make type not nullable even if defined explicitly
* **Parameters<Type>:** create a tuple from function arguments
* **ReturnType<Type>:** Create a type from function return type
* ## String Manipulation Type
    * Uppercase<stringType>
    * Lowercase<stringType>
    * Capitalize<stringType>
    * Uncapitalize<stringType>

```ts
type BtnType = 'warning' | 'error' | 'information'
type CapBtnType = Capitalize<BtnType> // Warning , Error, Information
```