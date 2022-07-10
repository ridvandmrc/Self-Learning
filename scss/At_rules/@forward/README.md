### @Forward
* The **@Forward** rules loads a Sass stylesheet and make it mixin, function and variables when your stylesheet is loaded with **@use** rule. it makes it possible  to organize Sass libraries across many files.

```scss
// src/_list.scss
@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

// bootstrap.scss
@forward "src/list";

// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

``
Also we can add prefix 
``

```scss
// src/_list.scss
@mixin reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

// bootstrap.scss
@forward "src/list" as list-*;

// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

### Controlling Visibility
* Sometimes we don't want to forward a module or mixin, so we can **hide** them.
* syntax is @forward <Url>  **hide** <members...> 

```scss
// src/_list.scss
$horizontal-list-gap: 2em;

@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin list-horizontal {
  @include list-rest;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: $horizontal-list-gap;
    }
  }
}

// bootstrap.scss
@forward "src/list" hide list-reset, $horizontal-list-gap;
```

### ======> Summary
* Loads a separate stylesheet and make it mixin, module and function
* it works only **@use**
* ```scss
@forward 'src/file' as f
```