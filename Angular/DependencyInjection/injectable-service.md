## Creating Injectable Service

- A service is typically a class with a narrow, **well-defined** purpose.
- Angular distinguishes components from services to increase **modularity and reusability**
- A component can delegate certain tasks to services, such as fetching data from the server, validate user input or logging directly to the console.

### Service Examples

```ts
// Here's an example of a service class that logs to the browser console.

export class Logger {
  log(msg: any) {
    console.log(msg);
  }
  error(msg: any) {
    console.error(msg);
  }
  warn(msg: any) {
    console.warn(msg);
  }
}
```

- Services can depend on other service for example, `HeroService` that depends on the `Logger` service.

```ts
export class HeroService {
  private heroes: Hero[] = [];

  constructor(private backend: BackendService, private logger: Logger) {}

  getHeroes() {
    this.backend.getAll(Hero).then((heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
```

### Creating an Injectable service

- we can crate a service on the **CLI**.

```sh
ng generate service heroes/hero
```

```ts
import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: "root",
})
export class HeroService {
  getHeroes() {
    return HEROES;
  }
}
```

### Configuring dependency providers

- Beside class also we can use other values such as **Boolean, string, date and objects**.
- Angular DI provides the necessary API.

- There are some providers type instead of **Class**.

**Example 1:** using class provider

```ts
[{ provide: Logger, useClass: Logger }];
```

- Other provide type;
  - useExisting: allows us to alias a token and reference any existing one.
  - useFactory: allow us to define a function that constructs a dependency.
  - useValue: provides a static value

### UseFactory

- The `useFactory` provider key lets you create a dependency object by calling a factory function.
- With this approach we can create a dynamic value based on information available in the **DI** and elsewhere in the app.

```ts
constructor(
  private logger: Logger,
  private isAuthorized: boolean) { }

getHeroes() {
  const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
  this.logger.log(`Getting heroes for ${auth} user.`);
  return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
}
```

- To implement the **isAuthorized** flag, use a factory provider to create a new logger instance for **HeroService**.

```ts
const heroServiceFactory = (logger: Logger, userService: UserService) =>
  new HeroService(logger, userService.user.isAuthorized);
```

```ts
export const heroServiceProvider = {
  provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [Logger, UserService],
};
```

### Value providers: useValue

- The `useValue` key lets us associate a fixed value with a **DI** token.

* We should use this technique to provide runtime configuration constants such as website base addresses and feature flags.
