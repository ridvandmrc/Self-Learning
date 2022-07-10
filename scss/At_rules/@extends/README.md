### @extends
* You can provide a **extends** methods
* The biggest , sample of it is BEM

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.error--serious {
  border-width: 3px;
}
```

* @Extends solve this problem 
```scss
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error; // provide a rule only border-width
    border-width: 3px;
  }
}

// result of css

.error, .error--serious {
  border: 1px #f00;
  background-color: #fdd;
}
.error--serious {
  border-width: 3px;
}
```

### ======> Summary
* we can use inheritance by using **&**
* but **@extend** provide to make rule separately
* extends a rule directly 