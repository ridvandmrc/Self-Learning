## Style Rules
* Style Rules are foundation of Sass, just like they are for CSS. And they work the same way: we choose which elements to style with a selector.

### Nesting
* SCSS wants to make our life easier. Rather than repeating the same selectors over and over again.
* we can write one style rules inside another.
* SASS will automatically combine it.

#### CSS
<hr />

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

#### SCSS
<hr />

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

### Selector Lists
* Nested rules are **clever** about handling selector lists (that is comma-separated selectors).

#### CSS
<hr />

```css
.alert ul, .alert p, .warning ul, .warning p {
  margin-right: 0;
  margin-left: 0;
  padding-bottom: 0;
}
```

#### SCSS
<hr />

```scss
.alert, .warning {
  ul, p {
    margin-right: 0;
    margin-left: 0;
    padding-bottom: 0;
  }
}
```

### Selector Combinators
* we can nest selectors that use **combinators** as well. 
* we can put the combinator at the end of the outer selector.
* or at beginning of the inner selector.

#### CSS
<hr />

```css
ul > li {
  list-style-type: none;
}

h2 + p {
  border-top: 1px solid gray;
}

p ~ span {
  opacity: 0.8;
}
```

#### SCSS
<hr />

```scss
ul > {
  li {
    list-style-type: none;
  }
}

h2 {
  + p {
    border-top: 1px solid gray;
  }
}

p {
  ~ {
    span {
      opacity: 0.8;
    }
  }
}
```

### Interpolation
* we can use **interpolation** to inject values from **expressions** like variables and function calls into your selectors.
* This is particularly useful when we're writing **mixins**.