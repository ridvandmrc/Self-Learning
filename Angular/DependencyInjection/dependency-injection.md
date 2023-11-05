## Dependency injection in Angular

- When we develop a **class or service** and we want to use other the **class or service** other cher class.
- Dependency Injectıion or **DI**, increase flexibility and modularity.

### Understanding dependency Injection

- DI is one of the fundemantal concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directive, Pipes and Injectables.

- Two main roles exist in the DI system: **dependency consumer** and **dependency provider**.

- Angular facilities the interaction between dependency consumers and dependency providers using an abstraction called **injector**.
- When a dependency is requested, the injector checks its **registery** to see if there is an **instance** already available there.(**singlenton**)

### Providing dependency

- Let's imagine there is a class called **HeroService** that needs to act as a dependency in a component.
- We can use **@Injectable()** decorators.

```ts
@Injectable()
class HeroService {}
```

- The next step is to make it available in the **DI by providing** it.
- A dependency can be provided in **multiple places**:

      - At the **Component** level, use th **providers** field of the **@Component** decorator. Then **HeroService** becomes available to all instance.

```ts
@Component({
  selector: "hero-list",
  template: "...",
  providers: [HeroService],
})
class HeroListComponent {}
```

- If we want to have the provider for all component we have to provide it in **@NgModule**

  - At the **NgModule** level, using the **providers** field of the `@NgModule` decorator. In this scenerio **HeroService** will be available for all component.

```ts
@NgModule({
  declarations: [HeroListComponent]
  providers: [HeroService]
})
class HeroListModule {}
```

- At the application root level which allows injjecting it into other classes in the application. This can be done by adding the `provideIn: root` field into the `@Injectable`

```tsx
@Injectable({
  providedIn: "root",
})
class HeroService {}
```

- When we provide the service at root level, Angular creates a single, shared instance of the `HeroService` and inject it into any class that asks for it.

### Injecting a dependency

- The most common way to inject a dependency is to **declare** in **constructor**.

```ts
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

- Another option is to use the **inject** method:

```ts
@Component({ … })
class HeroListComponent {
  private service = inject(HeroService);
}
```

### ======> Summary

- There are two main concepts for injection **provider** and **consumer**.
- For provider, we can use `@injectable` decorators.
- For consumer we can use two way one is from **component** other is **ngModule**
```ts
@Component({
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}

@NgModule({
  declarations: [HeroListComponent]
  providers: [HeroService]
})
class HeroListModule {}
```

- we can use the **DI** two way, one is from **constucture** and **inject** methods

```ts
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}

@Component({ … })
class HeroListComponent {
  private service = inject(HeroService);
}
```