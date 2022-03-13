## Attribute Selectors

It is possible to style HTML elements that have specific attributes or attribute values.

### CSS [attribute] selector

* The [attribute] selector is used to select elements with a specified attribute.

```css
/* below selector select a element that has target attribute */

a[target] {
    background-color: yellow;
}
```

### CSS [attribute="value"] Selector

* the ***[attribute="value"] selector is used to select elements with a specified attribute and value.

```css
/* below selector select  element that has target if equal "_blank" */

a[target="_blank"] {
    background-color: yellow;
}
```

### CSS [attribute~="value] Selector

* The **[attribute~="value"]** selector  is used to select elements with an attribute value containing a specified word or fallowing space-separated.

```css
/* The following example selects all elements with a title attribute that contains a space-separated list of words, one of which is "flower": */

[title~="flower"] {
  border: 5px solid yellow;
}
```

### CSS [attribute|="value"] Selector

* The **[attribute|="value"]**  is used to select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-)

```css
/* fallowing example selects all elements with specified exact 'top' or fallowing hype(-) like class ="top" or class="top-text" */
[class|="top"] {
  background: yellow;
}
```

### CSS [attribute^="value"] Selector

* The **[attribute^="value]** is used to select elements with specified attribute, whose value starts with the specified value

```css
/** fallowing example select all elements that start-with top **/
[class^="top"] {
  background: yellow;
}
```

### CSS [attribute$="value"] Selector

* The **[attribute$="value"]** Selector is used to select elements with specified attribute, whose value ends with the specified value.

```css
/** Fallowing example select all elements that end-with top **/

[class$="value"] {
  background: yellow;
}
```

### CSS [attribute*="selector"] Selector

* The **[attribute*="selector"]** Selector is used for select   elements that contains a specified value.

```css
/** Fallowing example select all elements that contains "te" */

[class*="te"] {
  background: yellow;
}
```
### Summary Until now
* [attribute]: select element that have the attribute
* [attribute="value"]: select element that attribute equal the value
* [attribute~="value"]: select element that specified or space-separated
* [attribute|="value"]: select element that specified or hyphen-separated
* [attribute^="value"]: select element that specified or start with the value
* [attribute$="value"]: select element that specified or end with the value
* [attribute*="value"]: select element that contains the value