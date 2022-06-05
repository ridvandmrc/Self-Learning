## PARENT SELECTOR
* The parent selector, **&** is a special selector invented by **Sass** that's used in **nested selector** to refer outer selector.
* When a parent selector is used in an inner selector, it's replaced  with the corresponding  outer selector

```scss
.alert {
    &:hover {
        /* selector for alarm:hover */
    }

    &[mode=dark] {
        color:red; // select alert[mode=dark]
    }

    :not(&){
        color: gray; // means :not(.alert)
    }
}
```

### Adding Suffixes
* we can also use the parent selector to add suffixes to outer selector.
* This useful if we want to use **BEM**.
* we can use parent selector to add text.

```scss
.accordion {
    max-width: 500px;
    margin: 4rem 0;

    &__copy {  // equals .accordion__copy
        display:none;
        padding: 10rem;
        color:gray;
    }

    &--open { //equals .accordion--open
      display: block;
    }
}
```