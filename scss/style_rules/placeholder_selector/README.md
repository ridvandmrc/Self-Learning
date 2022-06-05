## Placeholder  Selector
* Sass has a special  kind of selector known as a "placeholder". It looks  and acts a lot of  like a class selector.
* it start with ***%*** and it's not included in the CSS output.

* we can use @extend to use this **placeholder**.

```scss
%toolbelt { //this is a placeholder
  box-sizing: border-box;
  border-top: 1px rgba(#000, .12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover { border: 2px rgba(#000, .5) solid; }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}
```