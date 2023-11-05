## Understanding Binding

### Property Binding

- To bind to and element's property, square brackets can be used **[]**.
- Look at this example:

```html
<img alt="item" [src]="itemImageUrl" />
<p [ngClass]="classes"></p>
```

### Attribute binding

- Attribute binding in Angular helps us set values for attributes directly.
- We can improve accessibility, style dynamically.

### Syntax

- Attribute binding syntax similar like **property binding**, but instead of an element property **between brackets**, we should put attribute with the prefix **attr**, followed by a dot.

```html
<p [attr.attribute-you-are-targeting]="expression"></p>
```

- Some example

```html
<button type="button" [attr.aria-label]="actionName">
  {{actionName}} with Aria</button
>,
<tr>
  <td [attr.colspan]="1 + 1">One-Two</td>
</tr>
```

## Class and style binding

### Binding to a single CSS class

- To create a single class binding:

`[class.sale] = "onSale"`

- Angular adds the class when the bound expression, **onSale** is truthy, and it removes the class when the expression is falsy.

### Binding to multiple CSS classes

- To bind to multiple classes:

`[class]="classExpression`

The expression can be one of:

- A **space-delimited** string of class names.
- An object with class names as the keys and truthy or falsy as the values
- An array of class names.

```html
<div [class.sale]="true">Test</div>
<div [class]="class-1 class-2">Test</div>
<div [class]="{class1:true,class2:false}">Test</div>
<div [class.sale]="['class1','class2']">Test</div>
```

### Binding to a single style

- we can use **style** prefix to add a single style like:

`[style.width]="10px"`

- We can use **dash-case** or **camelCase**.

```html
<nav [style.background-color]="expression"></nav>
<nav [style.backgroundColor]="expression"></nav>
```

- Some example:

```html
<div [style.width]="100px">Test</div>
<div [style.width.px]="100">Test</div>
<div [style]="width:100px;height:100px">Test</div>
<div [style]="{width:'100px';height:'100px'}">Test</div>
```

## Two-way binding

- Two-way binding gives component in our application a way to share data.
- We should use two-way binding to listen for **events** and **update value**

### Adding two-way data binding

- Angular two way binding combination of this **[()]**.
- The **[()]** syntax combines the bracket of property binding, **[]** and event binding **()**.

````html
<app-sizer [(size)]="fontSizePx"></app-sizer>

### Some Example - Class binding ```html
<div [class.selected]="data === index"></div>
// added selected class
<div [style.color]="selectedColor"></div>
// added color with style
````

### Template Reference variables

- Template variables help us to use data from one part of a template in another of the template.
- Use template variables to perform tasks such as respond to user input ...

  - a DOM element within a template
  - a directive or component
  - a templateRef from an **ng-template**
  - a web component

```html
<input #phone placeholder="test" />

<button type="button" (click)="callPhone(phone.value)">Call</button>
```

### Variable specifying a names

- If the variable specifies a name on the right-hand side, such as `#var="ngModel"`, the variable refers to the directive or component on the element with a match `exportAs`names.

#### Using **Ngform** with template variables

- In most cases, Angular sets the template variable's value to the element on which it occurs.
- The **NgForm** directive demonstrates getting a reference to a different value by referencing a directive's `exportAs` names.

```html
<form #itemForm="ngForm" (ngSubmit)="onSubmit(itemForm)">
  <label for="name">Name</label>
  <input
    type="text"
    id="name"
    class="form-control"
    name="name"
    ngModel
    required
  />
  <button type="submit">Submit</button>
</form>

<div [hidden]="!itemForm.form.valid">
  <p>{{ submitMessage }}</p>
</div>
```

- without the **ngForm** attribute value, the reference value of **itemForm** would be the **HTMLFORMELEMENT**
- If an element is an Angular component, a reference with no attribute value will automatically reference the component instance.
- 