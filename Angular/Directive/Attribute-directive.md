## Attribute Directives

- Change the appearenve or behavior of **DOM elements** and **Angular components** with attribute directives.

### Building an attribute directive

- Let's create an own directive.
- We can create a directive via **CLI**

```sh
ng generate directive highlight
```

- this CLI comment create a file like:

```ts
import { Directive } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {}
```

- The `@Directive()` decorator's configuration property specifies the directive's CSS attribute selector,`[appHighlight]`.
- We should catch the element from **constructor** to inject the reference.

```ts
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "yellow";
  }
}
```

- then we can use this directibe like:

```html
<p appHighlight>Highlight me!</p>
```

### Handling user events

- let's se how we handle user events for directive

```ts
@HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
```

### Passing values into an attribute directive

- we should add an **@Input()** property to the directive

```ts
@Input() appHighlight  =  '';
```

- we will use the input like:

```html
<p [appHighlight]="color">Highlight me!</p>
```

### Add a second property to directive

- In order to do that, we should add second **@Input**

```ts
@Input defaultColor = '';

@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.appHighlight || this.defaultColor || 'red');
}
```

```html
<p [appHighlight]="color" defaultColor="violet">Highlight me too!</p>
```

### ======> Summary

- we can create a directive by using **CLI**
- we should get the target component from **constructor**
- we can get value by using **@Input()**
