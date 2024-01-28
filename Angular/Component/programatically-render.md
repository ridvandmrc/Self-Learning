### Programatically rendering component

- There are two main ways to dynamically render a component. **NgComponentOutlet** and **ViewContainerRef**

### Using NgComponentOutlet

- **NgComponentOutlet** is a structural directive that dynamically renders a given component in a template.

```tsx
@Component({})
export class StandartBio {}

@Component({})
export class AdminBio {}

@Component({
    ...,
    template: `<p>Profile for {{user.name}}</p>
    <ng-container *ngComponentOutlet="getBioComponent()" /> `
})

export class CustomDialog {
@Input() user:User;

getBioComponent(){
    return this.user.isAdmin ? AdminBio:StartBio;
}
}
```

### Using ViewContainerRef

- A **view container** is a node in Angular's component tree that can container content.
- Any component or directive can inject **ViewContainerRef** to get a reference to view container corresponding to that component or directive's location in the DOM.
- we can use the **createComponent** method on **ViewContainerRef** to dynamically create and render a component.

```ts
@Component({
  selector: "leaf-content",
  template: ` This is the leaf content `,
})
export class LeafContent {}
@Component({
  selector: "outer-container",
  template: `
    <p>This is the start of the outer container</p>
    <inner-item />
    <p>This is the end of the outer container</p>
  `,
})
export class OuterContainer {}
@Component({
  selector: "inner-item",
  template: ` <button (click)="loadContent()">Load content</button> `,
})
export class InnerItem {
  constructor(private viewContainer: ViewContainerRef) {}
  loadContent() {
    this.viewContainer.createComponent(LeafContent);
  }
}
```

- The important point is **inner-item** because this is a placeholder, that refers to **viewContainer**.

## ========> Summary

- There are 2 ways **NgComponentOutlet** and **ViewContainerRef**
- **NgComponentOutlet** is using with **ng-container**
- **ViewContainerRef** is using with **inner-with**
