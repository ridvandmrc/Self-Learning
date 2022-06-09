## Variables
* Sass variables are simple: we assign a value to a name that begins with **$** 
* Then, we can refer to that name instead of value itself.

``<variable>: <expression>``

```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
    border: 1px solid $border-dark; /* border: 1px solid $border-dark; */
}
```

* Also, we can use this variable different scope, so we can override this.

```scss
$variable1: red;

.rule-1{
    color: $variable1; // means in css - color:red;
}

$variable1: blue;

.rule-2{
    color:$variable1; // means in css - color:blue;
}
```

### Default values

* we can define an initial value then user can override it. 
* Sometimes we want to define a value in library side and we want to apply this change to all application 
* In this case we can use **!default**, keyword from Saas

```scss
SCSS SYNTAX
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

### Advanced Variable Function
* There are some functions to provide pre-defined functions.
* One of this is `map.get(variable-object,"value")`

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```

## ===========> Summary
* We can assign a value by use '$' beginning of the variables.
* For the libraries `!default` keyword can be used.
* `map.get()` is pre-defined method in Saas, we can use it in mapping.
```css
$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```