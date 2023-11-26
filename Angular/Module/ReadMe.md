### NgModule

- **NgModules** configure the injectori the compiler and help organize related things together.

- An **NgModule** is a decorator. it takes a metadata object that describes how to compile a component's template and how to create an injector at runtime.
- It idenrifies the module's own **components, directive and pipes**, making some of them **public**, through the **exports** property.

* **Modules** are a great way to organize an application and extend it with capabilities from external libraries.
* Angular libraries are **NgModules**, such as **FormModule, HttpClientModule, and RouterModule**. and also many third-party libraries.
* **NgModules** consolidate component, directives and pipes into cohesive blocks of functionality,
  each focused on a feature area, application business domain, workflow or common collection of utilities.

```ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Properties

- **declarations:** The components, directive and pipes that belong to the **NgModule**. A new application project's root
  **NgModule** has only one component, called **AppComponent**.
- **imports**: Other **NgModules** we are using, so that we can user their declarables. The newly generated root **NgModule** imports **BrowserModule** in order to use browser-specific service.
- **providers**: If we want to use the services for entire module, we should use this **providers**.
- **bootstrap**: The component that Angular creates and inserts into the **index.html** host web page, bootstraping the application.

### forRoot() pattern

- Generally, adding **provideIn** is enough.
- If we want to provide a **singlenton**, we can use **forRoot()**.

Some ways to prevent duplication:

- we can use **providedIn**
- we can seperate our service own module.
- we can define **forRoot** and **forChild**
