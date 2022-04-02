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

### we can select named slot of element

```js
const assignedElement = document.querySelector('[slot="footer"]');
// this selector select slot that name is footer
```

### we can select default slot by using document.querySelector

```js
document.querySelector("tag that has slot > :not[slot]")
```

### we can select last child of element
```js
document.querySelector("custom-component > div:last-child")
```

### we can use start-with(^), end-with($) and contains(*)

```js
document.querySelector('[type^="err"]') // start with err
document.querySelector('[type$="err"]') // end with err
document.querySelector('[type*="err"]') // contains with err


```

### we can select specific element by giving order number

```js
document.querySelector("div:nth-child(2)")
```

## document.querySelectorAll(selectors)
* querySelectorAll return nodeList

### Syntax
```js
elementList = parentNode.querySelectorAll(selectors);
```

### we can give an list of selectors by using comma(,)

```js
const matches = document.querySelectorAll("div.note, div.alert")
// Above sample is selecting either div.not or div.alert

document.querySelectorAll("[type='alarm'], [type='active']")
```

## ====> Summary
* we can use css selector string to select element
* we can select element that has specific attribute
```js
document.querySelector('[type="error"]')
```
* we can select named slot
```js
document.querySelector('[slot="footer"]')
``` 
* for querySelectorAll, we can use multiple selector
```js
document.querySelectorAll('[type="error"], [type="warning"')
```
