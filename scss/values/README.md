### Values
* Sass supports a number of value types, most of them comes from **CSS**.

#### Some Value types:
* **Numbers**: which may or may not have units, 12 or 100px
* **String**: may have quotes
* **Colors**:can be referred to hex(#c6538c), name(blue), or return function(rgb(),hsl())
* **Lists of values**: may be separated by **spaces** or **commas** and may be enclosed in **square brackets** or **no brackets** like:
```scss
$list1: 1.5em 1em 0 2em
$list2: Helvetica, Arial, sans-serif
$list3: [col1-start]
```
* **Maps**: that associate values with keys, like ("background":red, "foreground":pink)

### Lists
* List contain a sequence of other values.
* In Sass, lists can be separated by **commas**, **spaces** or **slashes**.
* Also we can use square bracket ([line1 line2]), which is useful when using **grid-template-columns**

### Do Something for Every Element
* We can use **@each** with list.

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
    .icon-#{size}{
        font-size: $size;
        height: $size;
        width $size;
    }
}
```

### Maps
* Maps in **Sass** hold pairs of keys and values and make it easy to look up a value.
* They're written like
``
(<expression>:<expression>,<expression>: <expression>).
``
* The expression before **:** is the **key**, and expression after **:** is the **value**

```scss
$icons: ("eye": "\f112", "start":"\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
    .icon-#{$name}:before {
        display: inline-block;
        font-family:"Icon Font";
        content: $glyph;
    }
}
```


### ========> Summary
* There are several Value types but interesting ones are **list and maps**
* Lists are separated by comma, space, slashes and square brackets
* Maps provides keys and values
* They are generally used with **@each**