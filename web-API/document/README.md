## DOCUMENT
* The **Document** interface represents any web page loaded in the browser and serves as an entry point into the web page's content which is called DOM tree
* the DOM tree includes elements such as <body> and <table>, among many others.

## Properties of Document

### Document.activeElement
* Returns the **Element** that currently has focus

```js
// let's suppose that a button already focused
const focusedElement = document.activeElement // return focused button
```

### Document.body
* Return the **<body>** or **<frameset>** node of the current document
```js
const body = document.body // return body element not <html> element
```

### Document.childElementCount
* returns the child elements of current document

```js
// for google
document.childElementCount // return 1
```

### Document.children
* returns the children elements of current document
```js
// for google
document.children // it returns [html]
```

### Document.documentElement
* Returns the **Element** that is a directly child of document . For HTML documents, directly <html> element.

```js
document.documentElement // returns html
```

### Document.forms
* returns an HTMLCollection of the **<form>**
```js
document.forms // for youtube it returns one element (search-bar)
```

### Document.images
* returns an HTMLCollection of the **<img>**
```js
document.images // for youtube it returns more than 100 elements
```

### Document.lastElementChild
* returns the last child of element of the current docs

### Document.styleSheets
* returns a StyleSheetList of CSSStyleSheet object for stylesheets explicitly linked into or embedded  in a document.

```js
// for google
document.styleSheets // return 46 cssStyleSheet
```

## Extensions for HTMLDocument
* The **Document** interface for HTML documents inherits from the **HTMLDocument** interface or, since HTML5...

### Document.cookie
* returns a semicolon-separated list of the cookies for that document.
```js
document.cookie // returns complex thing for google
```

### Document.domain
* Get/Sets the domain of the current document
```js
document.domain // return 'www.google.com' for google
```

### Document.lastModified
* returns the date on which the document was modified.
* it returns current time

 ### Document.location
 * returns URO of the Current document.
 ```js
 // returns an object like

 Location {ancestorOrigins: DOMStringList, href: 'https://www.google.com/', origin: 'https://www.google.com', protocol: 'https:', host: 'www.google.com', …}
ancestorOrigins: DOMStringList {length: 0}
assign: ƒ assign()
hash: ""
host: "www.google.com"
hostname: "www.google.com"
href: "https://www.google.com/"
origin: "https://www.google.com"
pathname: "/"
port: ""
protocol: "https:"
reload: ƒ reload()
replace: ƒ replace()
search: ""
toString: ƒ toString()
valueOf: ƒ valueOf()
Symbol(Symbol.toPrimitive): undefined
[[Prototype]]: Location
 ```

 * also we can set it
 ```js
 document.location ='admin';
 // for google page direct to www.google.com/admin
 ```

 ### Document.title
 * sets or gets the title of document
 ```js
 document.title // Google for www.google.com
 ```
 ### Document.URL
 * returns the document location as a string
 ```js
 document.URL // https://www.google.com // for google
 ```

 ## Methods
 * This interface also inherits from the Node and EventTarget interfaces.
 * we can use these methods document.methodName

 ### Document.append()
 * insert a set of **Node** or **DomString** objects after last child

```js
const div1 =  document.createElement('div')
const div2 =  document.createElement('div')

document.append(div1,div2)
``` 

### Document.createElement()
* create a new element with given tag name and namespace URI.

```js
const el = document.createElement('div')
const btn = document.createElement('button')
```

### Document.getElementById()
* returns an object reference to the identified element
```js
const el = document.getElementById('testId')
// returns element that id equals 'testId'
```

### Document.getElementsByClassName()
* return a list of elements with the given class name.
```js
const el = document.getElementsByClassName('active')
// select All elements that has active class
```

### Document.getElementsByTagName()
* return a list of elements with given tag name
```js
const allButtonElements = document.getElementsByTagName('button')
// return all button elements
```

### Document.prepend()
* Inserts a set of **Node** objects before first child of the document

```js
document.getElementById('first').prepend(document.createElement('button'))
```

## Some Important Events
* we can listen these event by using **addEventListener**

### scroll
* fired when the document view or an element has been scrolled.
```js
document.addEventListener('scroll',()=>{
    console.log('scroll')
})
// triggered when scrolling
```

### wheel
* fired when user rotates a wheel button on a pointing device (typically a mouse).
```js
document.addEventListener('wheel',()=>{
    console.log('wheel')
})
// triggered when scrolling by wheel
```

## Clipboard Events

### copy
* fired when the user initiates a copy action 

```js
document.addEventListener('copy',()=>{
    console.log('copy by using ctrl + c or mouse)
})
```

### cut
* fired when the user initiates a copy action 

```js
document.addEventListener('cut',()=>{
    console.log('cut by using ctrl + x or mouse)
})
```

### paste
* fired when the user initiates a copy action 

```js
document.addEventListener('paste',()=>{
    console.log('paste by using ctrl + v or mouse)
})
```
 
 ## Selection Events

 ### Selectionchange
 * fired when the document selection change
 ```js
 document.addEventListener('selectionchange',()=>{
     console.log('selection Change')
 })

 // triggered when keep selecting 
 ```

 ### Selectstart
 * fired when user begins a new selection

 ```js
 document.addEventListener('selectstart',()=>{
     console.log('select start')
 })
 ```

 ## =====> Summary
 Some Important attributes
 * activeElement
 * documentElement
 * location
 * Url
 * prepend
 * scroll
 * wheel
 * copt, cut, paste
 * selectionchange
 * selectstart