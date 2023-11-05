## Structural Directives

- Structural directives are directives which change the **DOM** layout by adding and removing DOM elements.
- Angular provides a set of built-in structural directives (**NgIf**, **NgForOf**,**NgSwitch** ...)

### Structural directive shorthand

- When structural directives are applied they generally are prefixed by an asteriks, `*`, such as `*ngIf`

```html
// show component if hero exist
<div *ngIf="hero" class="name">{{hero.name}}</div>
```

- Angular creates an `<ng-template>` element and applies the `*ngIf` directive onto it where it becomes a property binding in square brackets `[ngIf]`.

```html
<ng-template [ngIf]="hero">
  <div class="name">{{hero.name}}</div>
</ng-template>

// of course ng-template is not reflected
<div _ngcontent-c0>Mr. Nice</div>
```

- The fallowing example, lets compare `*ngFor` in `<ng-template>`

```html
<div
  *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById"
  [class.odd]="odd"
>
  ({{i}}) {{hero.name}}
</div>

<ng-template
  ngFor
  let-hero
  [ngForOf]="heroes"
  let-i="index"
  let-odd="odd"
  [ngForTrackBy]="trackById"
>
  <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
</ng-template>
```

### Creating a structural directive

- Following is the `UnlessDirective` selector, applied to the paragraph element.

```html
<p *appUnless="condition">Show this sentence unless the condition is true.</p>
```

- lets see

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: "[appUnless]" })
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
```

#### Watch the video from Youtube