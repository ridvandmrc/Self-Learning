// ! keyof operators takes an object type and produce a string or numeric literal union

type Point = { x: number; y: number }
type Coordinate = keyof Point

// ? it can be useful convert type to index signature by using keyof

type PointString = { [coordinate in keyof Point]: string }

const coordinateNumber: Point = { x: 0, y: 0 }
const coordinateString: PointString = { x: '0', y: '1' }

// ? Get keyof all css declaration

type CssTypes = keyof CSSStyleDeclaration

const style1: CssTypes = 'alignItems'
const style2: CssTypes = 'color'

// ? Get HTML attributes

type HTMLTypes = keyof HTMLElement

const elementAttr1: HTMLTypes = 'tabIndex'
const elementAttr2: HTMLTypes = 'style'

// ? get HTML event attributes

type HTMLEvent = keyof Event

const event1: HTMLEvent = 'stopImmediatePropagation'
const event2: HTMLEvent = 'preventDefault'

// ? get Document Attributes
type DocumentTypes = keyof Document

const document1: DocumentTypes = 'body'
const document2: DocumentTypes = 'querySelector'

// ? Create own interface

interface Countries {
  CapitalCity: string
  Population: number
  Neighbors: this[]
}

type CountiesType = keyof Countries

const country: CountiesType = 'CapitalCity'

// ? Get CustomEvent

type EventType = keyof CustomEvent

const eventName: EventType = 'detail'

// ? get Observers

type ObserverType = keyof MutationRecord

const observerType1: ObserverType = 'attributeName'
