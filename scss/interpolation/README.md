## Interpolation
* Interpolation can be used anywhere in SaaS stylesheet to embed the result of a script expression
*  we just wrap expression in `#{}` in any fallowing places.

    * Selectors in rules
    * Property names in declaration
    * Custom property  values
    * CSS at Rules
    * @extends
    * Plain CSS @import
    * Quoted and unQuoted string
    * Special functions
    * Plain CSS function names
    * loud comments

``
Note: just use #{} for above places
``

```scss
@mixin corner-icon($name, $top-or-bottom, $left-or-right){
    .icon-#{name} {
        background-image: url('./images/#{name}.svg');
        position: absolute;
        #{top-or-bottom}:0;
        #{left-or-right}:0;
    }
}

@include corner-icon('mail', top, left);
```


### ======> Summary
* Use **#{}** for interpolate.
* also we can use interpolation in **variable**, **property**, **rules** ...