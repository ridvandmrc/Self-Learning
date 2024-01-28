### Forms in Angular

- Angular provides two different approaches to handling user input through forms.
- **Reactive** and **template-driven**

- **Reactive Forms**: Provide direct, explicit access to the underlying form's object model.
  compare to template-driven forms, they are more **robust**, they're more **scalable**, **reusable** and **testable**.
  <hr />
- **Template-driven forms**: Rely on directives in the template to create and manipulate the underlying object model.

### Key differences

|                         | Reactive                              | Template-driven                |
| ----------------------- | ------------------------------------- | ------------------------------ |
| **Setup of form model** | Explictly, created in component class | Implicit, create by directives |
| **Data Model**          | Structured and immutable              | Unstructurad and mutable       |
| **Data flow**           | Synchronous                           | Asynchronous                   |
| **Form Validation**     | Functions                             | Directives                     |

### Common form foundation classes

- Both reactive and template-driven forms are built on the following base classes.

| Base Classes    | Details                                                              |
| --------------- | -------------------------------------------------------------------- |
| **FormControl** | Tracks the value and validation status of an individual form control |
| **FormGroup**   | Tracks the same values and status for a collection of form controls. |
| **FormArray**   | Tracks the same values and status for an array of form controls      |

### Reactive Forms

- Reactive forms provide a **model-driven** approach to handling form inputs.
- **FormGroup** typically contain several realted controls. It contains two ways of grouping muliptle realted controls.

### Create FormGroup Instance

- we will craete **profileForm** here by using **FormGroup**

```ts
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
  });
}
```

- We defined our profile forms, the we should associate it to **template**.

```html
<form [formGroup]="profileForm">
  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName" />
  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName" />
  ...
</form>
```

- And also we can put some validation to out **inputs**, by using **Validators**.

```ts
import { Validators } from "@angular/forms";
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl(""),
  });
}

// we can present status like
firstName.status;
```

### Validate Forms

- For reactive form, we can define validator through the class.
- we can also write own validator functions.
- we can also user built-in validators.

```ts
ngOnInit(){
  this.form = new FormGroup({
    username:new FormControl('initial value',[
      Validators.required,
      Validators.minLength,
      customValidator()
      ]),
      role:new FormControl('initial value')
  })
}

```

```html
<form [formGroup]="form">
  <input [formGroup]="form.controls.username" name="username" />
  <input [formGroup]="form.controls.role" name="roles" />
</form>
```

### Custom Validators

- Sometimes The built-in validators are not enough to responsd to our project needs.
- So, In this point, we need to have custom validator.
- We can also define in ourside.

```ts
export const customValidator = (nameRe: Regexp) => {
  return (control: AbstractControl): ValidationErrors => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
};
```
