### Combinators Selector

``
A combinator is something that explains the relationship between the selectors.
``

* A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:
* descant selector (space)
* child selector (>)
* adjacent sibling selector (+)
* general sibling selector (~)

### Descendant Selector

The descendant selector matches all elements that are descendants of a specified element.

The fallowing example select all <p> elements inside <div> elements:

```css
div p {
 background-color: yellow;
}
```

```html
<div>
  <p>Paragraph 1 in the div.</p> <!-- Selected  -->
  <p>Paragraph 2 in the div.</p><!-- Selected  -->
  <section><p>Paragraph 3 in the div.</p></section> <!-- Selected  -->
</div>

<p>Paragraph 4. Not in a div.</p> <!-- Not Selected  -->
<p>Paragraph 5. Not in a div.</p> <!-- Not Selected  -->
```

### Child Selector ( > )

The child selector selects all elements that are the children of a specified element.

```txt
Note: Child selector is different from the descant selector.
in order to be child, tag is started after parent
```

```html
<div>
    <p>child of div element</p>
    <p> child element of div
        <span> span is not child of div element, but descant of div element </span>
    </p>
</div>
```

```css
div > p {
  background-color: yellow;
}
```
```html
<p>The child selector (>) selects all elements that are the children of a specified element.</p>

<div>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p>
  <section>
    <!-- not Child but Descendant -->
    <p>Paragraph 3 in the div (inside a section element).</p>
  </section>
  <p>Paragraph 4 in the div.</p>
</div>

<p>Paragraph 5. Not in a div.</p>
<p>Paragraph 6. Not in a div.</p>
```

### Adjacent Sibling Selector ( + )

* The adjacent sibling selector is used to select an element that is **directly after**  another specific element.
* sibling element must have the same parent element,and **"adjacent"** means **immediately following**.

```css
div + p {
  background-color: yellow;
}
```

```html
<div>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p>
</div>

<p>Paragraph 3. After a div.</p>
<p>Paragraph 4. After a div.</p>

<div>
  <p>Paragraph 5 in the div.</p> <!--  selected-->
  <p>Paragraph 6 in the div.</p>
</div>

<p>Paragraph 7. After a div.</p> <!-- selected -->
<p>Paragraph 8. After a div.</p>
```

### General Sibling Selector ( ~ )

* The general sibling selector **selects all** elements that are **next siblings** of a specified element.

```css
div ~ p {
  background-color: yellow;
}
```

```html
<p>The general sibling selector (~) selects all elements that are next siblings of a specified element.</p> <!-- not-selected, P element but not next sibling  -->

<p>Paragraph 1.</p><!-- not-selected, P element but not next sibling  -->

<div>
  <p>Paragraph 2.</p>
</div>

<p>Paragraph 3.</p> <!-- selected -->
<code>Some code.</code>
<p>Paragraph 4.</p> <!-- selected -->
```

### ===> Summarize Until Now
* Use space for descant selector 
```css
div p {
  color: red;
}
```
* Use '>' for child selector
```css
div > p {
  color: blue;
}

<div>
  <p> asd </p> /* this is child of div  */
  <h1>
    <p> asd </p> /* this is not a child, but this is descant  */
  </h1>
</div>
```
* Use '+' for adjacent sibling selector

```css
div + p{
  color: red;
}

<div>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p> /* not selected, child and descant */
</div>

<p>Paragraph 3. After a div.</p> /* selected, adjacent  */
```
* Use '~' for general sibling selector
```css
div ~ p {
  color: red;
}

<p> not selected </p>
<div>
  <p> not selected </p>
</div>

<p> selected </p>
<p> selected </p>
```