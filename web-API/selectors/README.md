## Document.querySelector()
* This method 'querySelector' return the **first** element within the document that matches the specified selector.
* if selector matches some element, it will return **Element** otherwise it will return **null**
* Exception if selector is invalid.

## Example 

## Finding the first Element matching a class

```js
const el = document.querySelector(".myclass")
```

## More complex selector
* Selector can also be powerful.
* we can use css selector like attribute selector
* we can use start with, end with and all (^,* or $)
* we can select slot named or unnamed
* All CSS selector strings are valid

### Select specific input element that placed specific location

```js
const inputElement = document.querySelector("div.user-panel.main input[name='login']")
```

 ### we can use negative selector
```js
const element = document.querySelector('div.user-panel:not(.main) input[name="login"])');

// Above selector will select an input with a parent div with .user-panel but class not main
```