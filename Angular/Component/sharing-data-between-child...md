## Sharing data between child and parent directives and components

- A common wat to share data in **Angular**, using **@Input()** and **@Output()**.

#### Sending data from parent to child

```html
<parent-component>
  <child-component></child-component>
</parent-component>
```

- **@Input** and **@Output** a way to communicate with parent and child.
- **Input** sending data to parent to child
- In order to watch Input element, we can use **OnChanges** lifecycle hooks.

#### Sending data from child to parent

- The **@Output()** decorator is a way to communicate from child to parent.
- **@Output()** must have the type of **EventEmitter**, which is a class in **@angular/core**

```ts
@Output() newItemEvent = new EventEmitter<string>();

addNewItem(value:string) {
    this.newItemEvent.emit(value)

}
```

#### Using @Input and @Output together

Use **@Input()** and **@Output()** on the same child component like:

```html
<app-input-output [item]="currentItem" (deleteRequest)="crossOffItem($event)">
</app-input-output>
```

#### Additional Configuration

- Mark **Input** as a required field.

```ts
@Input({required: true}) item!: string; // Second, decorate the property with
```

- Transform **Input** attribute from string to boolean.

```ts
import { booleanAttribute } from '@angular/core'; // First, import booleanAttribute
  @Input({transform: booleanAttribute}) itemAvailability!: boolean; // Second, decorate the property with transform
```
