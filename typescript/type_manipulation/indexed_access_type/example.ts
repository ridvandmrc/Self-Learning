// ? we are using indexed type to reach specific prototype of another type

type Country = {
  capitalCity: string
  population: number
  neighborhood: Country[]
}

type City = Country['capitalCity']

type CountryInstance = keyof Country

const Turkey:CountryInstance = "capitalCity" // * this type has "capitalCity | population | neighborhood "

type CityName = Country['capitalCity'] // * cityName will be string

type cityAndPopulation = Country["capitalCity" | "population" ] // * type will be string | number

type allTypeOfCountry = Country[keyof Country] // * type will be "string | number | Country[]"

type cityPopulation = "capitalCity" | "population"

type cityPopulation2 = Country[cityPopulation] // * type will be "string | boolean"

// ? list HTMLElement types

type elementType = HTMLElement[keyof HTMLElement] //? list of htmlElement Type
type elementType2 = keyof HTMLElementTagNameMap //? list all htmlTags

const htmlElementType2:elementType2 = "ul"
const htmlElement:elementType = 'div'

type TagType = HTMLElementTagNameMap[elementType2] //? list HTMLTag types

// ?