### @Each
* The **@each** rule makes it easy to emit or evaluate code for each element ıf a **list** or each pair in a map.
* it is great for repetitive styles that only have a few variations between them.
* it's usually written like:
``
@each <variable> in <expression> { ... }
``
* Expression should return a list.

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
    .icon-#{$size} {
        font-size: $size;
        height: $size;
        width: $size;
    }
}
```

### With Maps
* Also we can use **@each** to iterate over every **key/value** pair in a map by writing it.
* syntax is like that:
``
@each <variable>,<variable> in <expression>  {... }
``
* The key is assigned to the first variable name, and the element is assigned to the second.

```scss
$icons: ("eye":"\f112","start":"\f12e","stop":"\f12f");
@each $name,$glyph in $icons {
    .icon-#{$name}:before {
        display:inline-block;
        font-family: "Icon Font"
        content: $glyph;
    }
}
```

### Destructuring 
* If we have a list of lists, we can use **@each** to automatically assign variables to each of the values from the inner lists by writing it **@each <variable...> in <expression> { ... }**.
* This is known as ***destructuring**, since the variables match the structure of inner lists
* Each variable name is assigned to the value at the corresponding position in the list, or null if the list doesn't have enough value

```scss
$icon:
    "eye" "\f112" 12px,
    "start" "\f12e" 16px,
    "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icon {
    .icon-#{$name}:before {
        display: inline-block;
        font-family: "Icon Font";
        content: $glyph;
        font-size: $size;
    }
}
```

### ====> Summary
* **@each** we are using this to iterate list, map or list of lists
* basic Syntax is that:
``
@each <variable> in <list, map or list of list> { ... }
``
* One example:
```scss
$list: 10, 20, 30, 40;

@each $size in $list {
    .size-#{$size} {
        font-size: $size#{'px'};
        line-height: $size#{'px'};
        width: $size#{'px'};
    }
}

```