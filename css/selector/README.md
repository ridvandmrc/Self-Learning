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

* we can also select tag and class

``
In this example only <p> elements with class="center" will be red and center aligned:
``

```css
p.center {
    text-align: center;
    color: red;
}
```

```html
<h1 class="center"> h1 </h1> <!-- this is not affected !-->
<p class="center"> p </p>  <!-- this is not affected !-->
```

* Also HTML element can take more than one class, but the latest one override previous.

```css
p.center {
    text-align: center;
    color: blue;
}

p.color {
    color: red;
}
```

```html
<h1 class="center"> h1 </h1> <!-- this is not affected !-->
<p class="center"> p </p>  <!-- this p is center align and color blue-->
<p class="center color"> p </p>  <!-- this p is center but color is red !-->

```

### The cSS Universal Selector

The universal selector (*) selects all HTML elements on the page.

``
The  CSS rule below will affect every HTML element on the page
``

```css
* {
  text-align: center;
  color: blue;
}
```
### The CSS Grouping Selector

* The grouping selector selects all the HTML Elements with the same style definitions.

* To group selectors, separate each selector with a comma. 

```css
h1, h2, p {
    text-align: center;
    color: red;
}
```

* Above selector select all h1, h2 and p selector.

## ====> SUMMARIZE until now
* select element has a specific class
   ```css
    p.center {...}
   ```
* use '*' for select all element in page.
* to group css selector, use comma for each tags
```css
h1, h2, p {
    text-align: center;
    color: red;
}
```