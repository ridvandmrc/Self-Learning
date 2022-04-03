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
 * 