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