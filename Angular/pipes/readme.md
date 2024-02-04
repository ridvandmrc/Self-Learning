## Pipes

- **Pipes** transforms string to currency, amounts, dates and other format.
- **Pipes** are simple functions to use in templates to accept an input value a return a transformed value.

### Some built-in pipes

- DatePipe
- UpperCasePipe
- LowecasePipe
- CurrencyPipe
- DecimalPipe
- PercentPipe
- AsyncPipe
- JsonPipe

### Using a pipe in a template

- To apply a pipe, we should use pipe operator (**|**)

```html
<p>The hero's birthday is in {{birthday | date}}</p>
```

- Also we can connect mutiple pipes so that output of one pipe becomes the input to the next.

```html
<p>The hero's birthday is in {{birthday | date | uppercases}}</p>
```

### Custom Pipeline

- If we want to define custom **pipe** that is not in **default pipelines**.
- To define pipeline, we should import **Pipe decorator** from **@angular**.

```ts
import { Pipe } from "@angular/core";

@Pipe({
  name: "greet",
  standalone: true,
})
export class GreetPipe {}
```

- If you want to transform the string, you should use transform method from `@angular/core`.

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "greet",
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(value: string, param1: boolean, param2: boolean): string {
    return `Hello ${value}`;
  }
}
```

### ==========> Summary

- We can transform the string to another string.
- We should use `Pipe` from `@angular/core`
- We can use pipe like `|`
- If you want to transform, you can use **Transform** from **angular/core**
- For defining custom pipeline, we can follow

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'test',
    standAlone:true
})

export class TestPipeline implement PipelineTransform {
    transform(value:string){
        return `Hello ${value}`
    }
}
```
