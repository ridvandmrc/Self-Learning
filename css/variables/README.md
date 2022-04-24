## CSS custom properties (variables)
* Custom properties (sometimes referred to as **CSS variables or cascading variables**) are entities defined by CSS authors.
* They are set using custom property notation (like **--main-color: black--**)
* they accessed using the **var()**. (e.g **color: var(--main-color);**)

### Why should we use it?
* Complex websites have very large amounts of CSS, often a lot of repeated values. 
* Same color might be used in hundreds of different places.
* Custom properties allow a value to be stored in one place, then referenced in multiple other places.
* An additional benefit is semantic identifiers. For example, **--main-text-color** is easier to understand than **#00ff00** .

### Usage 
* we can declare custom property by using begin with double-hyphen(--) variable . 
* we can use any value that is valid in CSS .
* like other property, this is written inside a ruleset like;
```css
element {
    --main-bg-color: brown;
}
```

* the selector given to the ruleset defines the scope that custom property can bu used in.
* A common best practice is to define custom properties on the **:root** pseudo-class.
* it can be applied globally across our HTML document

```css
:root {
  --main-bg-color: brown;
}
```

we can use this all of our project like:

```css
element {
  background-color: var(--main-bg-color);
}
```

### The **var()** Function
* The **var()** function is used to insert the value of CSS variable.
* Css variables have access to the DOM, which means that we can create variables with local or global scope

* Syntax of **var()** function.

```css
var(--name, value)
```
| Value   |      Description      |  
|----------|:-------------:|
| name | Required. The variable name (must start with two dashes (--)) |
| value | Optional. The fallback value (used if the variable is not found)|

``
**Note**: The variable name must begin with two dashes(--) and it is case sensitive !
``

### How var() Works
* CSS variables can have a global or local scope.
* global can be accessed through the entire document.
* To create a variable with global scope, declare it inside the **:root** selector.


### Let's create example  with traditional way

```css
body { background-color: #1e90ff; }
h2 { border-bottom: 2px solid #1e90ff; }

.container {
  color: #1e90ff;
  background-color: #ffffff;
  padding: 15px;
}

button {
  background-color: #fff;
  color: #1e90ff;
  border: 1px solid #1e90ff;
  padding: 5px;
}
```

### Let's do it modern wat

```css
:root {
  --blue: #1e90ff;
  -- white: #fff;
}

body { background-color: var(--blue); }
h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
}

```

### Overriding Variables
* we can override global custom variable if it defines under **:root**.
```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

button {
  --blue: #0000ff; /* local variable will override global */
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```

### Variables and Javascript
* CSS variables have access to the DOM, which means that we can change them with JS

```js
document.querySelector(':root').style.setProperty('--blue','lightblue')

```

### =============> Summary
* Some advantages of using Custom property
  * easy to read
  * easy to manage
  * make css customizable
* use **var(--name,value)** to use custom property
* use **:root** to define property as global
* use double hyphen to define variable (--)
* we can override global css property in other scope
* we can manipulate css property from JS
  * `` document.style.setProperty('--blue','lightblue') ``