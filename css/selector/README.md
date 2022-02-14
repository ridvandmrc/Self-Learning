## SELECTORS

CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide **css selector** into five categories:

* **Simple Selectors** (select elements based on name, id, class)
* **Combinator selectors** (select elements based on a specific relationship between them)
* **Pseudo-class selectors** (select elements based on a certain state)
* **Pseudo-elements selectors** (select and style a part of an element)
* **Attribute selector** (select elements based on an attribute or attribute value)

### Simple CSS Element Selector

Selects element by using html element name

```css
p {
    text-align: center;
    color: red;
}
```

### CSS id selector

* The id selector uses the id attribute of an HTML element to select a specific element.

* The id of an element should be unique within a page, so the id selector is used to select one unique element!

* To select an element with a specific id, write a hash(#) character, fallowed by the id of the element.

```css
#para1 {
    text-align: center;
    color: red;
}
```

```html
<p id="para1"> Lorem ipsum dolar set amed </p>
```
`note: id can not start with a number `

### CSS class Selector
* The class selector selects HTML elements with a specific class attribute.
* To select elements with a specific class, write a period (.) character, fallowed by the class name.

```css
.center {
    text-align: center;
    color: red;
}
```