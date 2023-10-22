### Components 
* Components are the main building blocks for Angular applications. Each component consists of:

    * An **HTML template** that declares what renders on the page
    * A Typescript class that defines behavior
    * A CSS selector that defines how the component is used in a template (Maybe it can applied to the template)


### Creating a Component
* The best way to create a component is with the Angular CLI. We can also create a component manually.

#### Creating a component using the CLI
* To create a component with CLI we can run the command.

```sh
ng generate component <component-name>
```

* By default, this command creates the following:
    * A directory named under the component
    * A component file, **component-name**.component.ts
    * A template file, **component-name**.css.html
    * A CSS file, **component-name**.component.css
    * A testing file, **component-name**.component.spec.ts

#### Creating a component manually
* Although the CLI is the best way to create an Angular component, we can also create a component manually with following the steps:
    * Navigate to our **Angular project directory**
    * Create a new file,**component**.component.ts
    * At the top of te file should be

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-component-overview',
    templateUrl:'./component-overview.component.html',
    styleUrls:['./component-overview.component.css']
})
export class ComponentOverviewComponent {}
```

#### Specifying a component's CSS selector
* Every component requires a ***CSS selector***. A selector instructs Angular to instantiate this component wherever if finds the corresponding tag in template HTML.

### Defining a component's template
* A template is a block of HTML that tells Angular how to render the component in our application. There are two ways to define template
    * referencing an external file
```ts
@Component({
    selector:'app-component',
    templateUrl:'./component-overview.component.html'
})
```
    * Directly withing the component

```ts
@Component({
    selector:'app-component',
    template:'<h1>Hello World!</h1>'
})
```

## NOTE
`You can not have both properties in a component`

### Declaring a component's styles
 Declaring component styles used for its template in one of two ways: 
    * by referencing an external file
```ts
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
```
    * directly within component
```ts
@Component({
  selector: 'app-component-overview',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
```