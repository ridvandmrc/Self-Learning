// ! Build type build on syntax for index signature.

type Horse = 'pony' | 'English'

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse
}

const HorseList: OnlyBoolsAndHorses[] = [
  { lord: 'English', ketchap: true, may: 'pony' },
]

// ! Mapped type is generic type which uses a union of KEY for iterating
// ! We can use mapped type in generics

// * we are making boolean all key
type OptionsFlag<T> = {
  [keys in keyof T]: boolean
}

type FeatureFlags = {
  darkMode: () => void
  newUserProfile: () => void
}

type FeatureOptions = OptionsFlag<FeatureFlags>

const foo: FeatureOptions = { darkMode: true, newUserProfile: false }
// ? same sample => type loo = Record<keyof FeatureFlags, boolean>

// ! Mapping modifier
// * we have two modifier readonly and ' ? '
// * we can remove or add with '+' or '-'

type CreateMutableType<Type> = {
  -readonly [Prop in keyof Type]: Type[Prop]
}

// short-way Partial<Record<keyof Type, string>>

type makeAllOptional<Type> = {
  [Property in keyof Type]+?: Type[Property]
}

// ! use AS for re-mapping

/*  
type MapToNewProperty<Type> = {
  [Prop in keyof Type as NewKeyType]: Type[Prop]
}
 */

type GettersType<Type> = {
  [Prop in keyof Type as `get${Capitalize<string & Prop>}` ]:() => Type[Prop]
}

interface Person {
  name:string;
  age:number;
  location:string;
}

type LazyPerson = GettersType<Person>

// ! Or we can filter

type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property,"kind">]:Type[Property]
}