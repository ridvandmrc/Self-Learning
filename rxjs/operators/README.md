### Operators
* RxJS (Reactive extension for Javascript) is mostly useful for its operators, event though the observable is the foundation.
* Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.

### What are operators?
* Operators are **functions**. There are two kinds of operators.
* **Pipeable Operators:** are the kind that can be piped to observables using the syntax **observableInstance.pipe(operator())**. These include **filter(...) and mergeMap(...)**.
* When called, they do not change the **existing observable** instance. instead, they return a new Observable.

``
A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. It is a pure operation: the previous observable stays unmodified
``

* A Pipeable Operator is essentially a pure function which takes one Observable **as input** and generates another observable **as output**.

* **Creation Operators**: are the other kind of operator, which can be called as standalone functions to create a new Observable.
For example: **of(1,2,3)** creates an observable that will emit 1,2 and 3, one right after another.
* For Example, the Operator called **map** is analogous th the Array method of the same name.

```js
import { of, map } from 'rxjs'; // mapping 

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 4
// value: 9
```

### Piping
* Pipeable operators are functions, so they could be use like ordinary functions: **op()(obs)**, but in practice, there tend to be many of them convolved together, and quickly become unreadable:
**op4()(op3()op2()op1()(obs))**. For that reason, Observables have a method called. **.pipe()**

```js
obs.pipe(op1(),op2(),op3(),op4());
```
### Creation Operators
* Distinct from pipeable operators, creation operators are functions that can be used to create an Observable with some common predefined behavior or by joining other Observables.

```js
import { interval } from 'rxjs';

const observable = interval(1000 /* number of milliseconds */);
```

### Higher-order Observables
* Observables most commonly emit ordinary values like strings and numbers, but surprisingly often, it is necessary to handle **Observables of Observables**, so-called higher-order Observables.

```js
const fileObservable = urlObservable.pipe(map(ur) => http.get(url));
```
* http.get() returns an Observable for each individual URL. Now you have an Observable of Observables,

 ### How can we flat them?

 ```js
 const fileObservable = urlObservable.pipe(
  map((url) => http.get(url)),
  concatAll()
);
 ```

* **ConcatAll():** operator subscribes to each "inner" Observable that comes out of the "outer"...
* **MergeAll**: subscribes to each inner Observable as it arrives,then emits each value as it arrives
* **switchAll**: subscribes to the first inner observable when it arrives, and emits each value as it arrives, but when next inner Observable arrives, unsubscribes to the previous one, and subscribes to the new one.
* **exhaustAll()**: Subscribes to the first inner Observable when it arrives, and emits each value as it arrives, discarding all newly arriving inner Observables until that first one completes.

* RxJs flattening operators **concatMap(), mergeMap(), switchMap(), and exhaustMap()**

* ### Creation Operators
    * of: of(value:null):Observable<null>
```js
import { of } from 'rxjs';
 
of(10, 20, 30)
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });
 ```
 * from:

* ### Transformation Operators
* ConcatMap: Maps each value to an Observable, then flattens all of these inner Observables
* **map**:
* **mapTo**:
* **mergeMap**:

### Join Creation Operators
* **race**:
* **zip**:

### Utility Operator
* **tap:**