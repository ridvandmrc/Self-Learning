## Built-in Directives
* Directives are **classes** that add additional behavior to element.
* we can use **built-in** directives to manage forms, lists, styles ...

* **Components**: Used with a template. most common directive type. (ngModel, ngClass ...)
* **Attribute directives**: Change appearence or behavior...
* **Structural directives**: change the **DOM** layout by adding and removing DOM elements.

### Built-in attribute directives

* Many **NgModules** such as **RouterModule** and the **FormModule** define their own attribute directive

* **NgClass**: Adds and removes a set of CSS classes.
* **NgStyle**: adds and removes a set of HTML styles.
* **NgModel**: Adds two-way data binding to an HTML form elementç

```html
currentClasses: Record<string, boolean> = {};
/* . . . */
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    saveable: this.canSave,
    modified: !this.isUnchanged,
    special:  this.isSpecial
  };
}

```