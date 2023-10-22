# Content Projection

- **Content Projection** is a pattern in which we insert or project.
- The content that we want to use **inside another component**.
- As an example, we could have a **Card** component that accepts content provided bu another component.

## Single-slot content projection

- This is basically **slot** if we want to display element in other element
- We are providing it by using **ng-content**.

```ts
@Component({
  selector: "app-zippy-basic",
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
})

`
<app-zippy-basic>
    <p> test test test </p>
</app-zippy-basic>
`
```

## Multi-slot component projection

- A component can have multiple slots.
- Each slot can specify a CSS selectors that determines which
  content goes into that slot.
- we can handle this problem by using **select** attribute of **ng-content**

```ts
@Component({
  selector: 'app-zippy-multislot',
  template: `
    <h2>Multi-slot content projection</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `
})

`
<app-zippy-multislot>
  <p question> // question selector
    Is content projection cool?
  </p>
  <p>Let's learn about content projection!</p>
</app-zippy-multislot>
`
```

## Conditional Content Projection

- If we want to render a component conditionally, we can do it by **ng-template** .
- **ng-content** is not recommended be cause the component should always initialized.

## ng-container

* In angular,  we can not bind a variable to multiple directive. like
```html
<div *ngIf="data" *ngFor="let temp of data"></div>
```
* Above example does not work.  so that we should wrap the element one more element like:

```html
<div *ngIf="data">
    <div *ngFor="let temp of data"></div>
</div>
```

* However This will add **extra html** element to **DOM**, In order to avoid this problem we should use **ng-container**
* **ng-container** works like **React.Fragment**.

```html
<ng-container *ngIf="data">
    <div *ngFor="let temp of data"></div>
</ng-container>
```