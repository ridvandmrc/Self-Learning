### Mapped Types

* Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been 
declared ahead of time.

```ts
type OnlyBoolsAndHOrses = {
    [key:string]: boolean | Horse;
}

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

```

* A mapped type is generic type which uses a union of ***PropertyKey*** to iterate keys to create a type.

``
Note: We can use  PropertyKey to return symbol of keys
``

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// Option property will take all property from the -- Type --and change their values to be a boolean.

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
}

type FeatureOptions = OptionFlags<FeatureFlags>;
// type of FeatureOptions = { darkMode: boolean; newUserProfile:boolean;}
```

### Mapping Modifiers

* There are two modifier which can be applied during mapping: **readonly** and **?** which affect mutability and optionality.

* we can remove or add these modifiers by prefixing with **-** or **+** (default). 

```ts
// remove 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
// -readonly remove readonly
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;
```
```ts
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;
```

### Key Remapping via **as**
* we can re-map keys in mapped types with an **as** clause in a mapped type:

* we can use this structure for re-mapping 

```ts
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

* We can define getter and setter for type object

```ts
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
interface Person {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<Person>; 
// LazyPerson { getName,getAge,getLocation}
```

* Or we can filter 

```ts

// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
// kindlessCircle  {radius}
```

* We can map over arbitrary  unions, not just union,

```ts
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>
```