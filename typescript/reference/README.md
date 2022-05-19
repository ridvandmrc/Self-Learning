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