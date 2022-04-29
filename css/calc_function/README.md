## Calc() function
* Calc() function let us perform calculations when specifying css property values. 
* It can be used anywhere a **length**, **frequency**, **angle**, **time**, **percentage**, **number** or **integer**.

### Syntax
```css
property: calc(expression)
width: calc(100% - 80px)
```

* The **calc()** function takes **only one expression** as its parameter, with the expression's result used  as the value.
* The expression can be any simple expression combining operators.

**+**: Addition

**-**: Subtraction

**\***: Multiplication. At least one of the argument must be a **number**

**/**: Division. The right-hand side  must be a **number**

### Some usage examples

#### Nested Example
```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

#### calc() for values
```css
  transition: transform calc(1s - 120ms);
```

### Math operator of calc()
```css
 /* Valid 👍 */
  margin: calc(10px + 10px);

  /* Invalid 👎 */
  margin: calc(10px + 5);

/* Division */
      /* Valid 👍 */
  margin: calc(30px / 3);

  /* Invalid 👎 */
  margin: calc(30px / 10px);

  /* Invalid 👎 (can't divide by 0) */
  margin: calc(30px / 0);
  
/* Multiplication */
  /* Valid 👍 */
  margin: calc(10px * 3);

  /* Valid 👍 */
  margin: calc(3 * 10px);

  /* Invalid 👎 */
  margin: calc(30px * 3px);
```

### Nested Calc(calc())
* we can do it, but it's never necessary
```css
  width: calc(
    calc(100% / 3)
    -
    calc(1rem * 2)
  );

/* One-line */
   width: calc(100% / 3 - 1rem * 2);
```

### CSS Custom properties  and calc()
* This is amazing property for css and calc()
* we can use custom property in calc

```css
html {
  --spacing: 10px;
}

.module {
  padding: calc(var(--spacing) * 2);
}

--spacing: 10px;
  --spacing-L: var(--spacing) * 2;
  --spacing-XL: var(--spacing) * 3;
```


### =====> Summary
* Calc let us perform calculation
* we can use it length, number, time ...
* we can apply math operation (+, -, /, *)
* we can use calc with custom property variables
*we can not dived by zero