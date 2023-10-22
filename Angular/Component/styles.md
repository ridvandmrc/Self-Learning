## Component styles

- In Angular, we can apply everything that we know about CSS, selectors, rules and media queries.

- Additionally, angular bundle component style with components.

### Component styling best practices

#### :host

- Every component is associated within an element that matches the component's selector.

- The **host** pseudo-class selector may be used to create styles that target the host element itself.

```ts
@Component({
  selector: 'app-main',
  template: `
      <h1>It Works!</h1>
      <div>
        Start editing to see some magic happen :)
      </div>
  `
})
...
```

```scss
:host {
  font-style: italic;
}
// if host has .active class
:host(.active) {
  font-weight: bold;
}
```

- If we want to make something according to the parent element we have to use **host-context**

```css
:host-context(.light-theme) {
  background: white;
}
```

#### :ng-deep

- Component normally apply only to the HTML int the component's own template.

- Applying **:ng-deep** pseudo-class to any CSS rule completely disables **the capsulation**

```scss
:host ::ng-deep h3 {
  // try to override all h3
  font-style: italic;
}
```

### Loading component styles

- There are several ways to add styles to a component:
  - By Setting **styles** or **styleUrls**.
  - Inline in the template HTML.
  - with CSS imports.

#### Styles in component metadata

- Add a **styles** array property to the @Component decorator.
- Each string in the array defines some CSS for this component.

```ts
@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styles: ['h1 { font-weight: normal; }'] // Array string
})
```

#### Style files in component metadata

- Load styles from external **CSS** files by adding a **styleUrls** property to a component's **@Component** decorator

```ts
@Component({
  selector: "app-root",
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ["./hero-app.component.css"],
})
```

### Template inline styles

- We can embed **CSS** styles directly into the HTML template by putting them inside **style** tags.

```ts
@Component({
  selector: 'app-hero-controls',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button type="button" (click)="activate()">Activate</button>
  `
})
```

### Some Best Practice

* We should define CSS custom property, CSS variable ...
* We should declare **@mixin**
* Use **::part** to access shadow DOM
* Definitely use **Typescript**