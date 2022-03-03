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