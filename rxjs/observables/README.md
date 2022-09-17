### Observable
* Observables are lazy Push collections of multiple values.

### Example

```js
import { Observable } from 'rxjs';

const foo = new Observable((subscriber) =>{
    console.log('Hello');
    subscriber.next(42);
})

// let's execute them
foo.subscribe((x) => {
    console.log(x)
})

foo.subscribe((y) => {
    console.log(y)
})

```

Conclusion:
* check func.call() vs subscribe() // means "give me one value synchronously" 
* observable.subscribe() means "give me any amount of values, either synchronously or asynchronously" 


 ### Anatomy of an observable
 * Observables are created using **new Observable** or creation operator.
 * execute tı deliver **next**/ **error** / **complete** notification to the Observer.
 * and their execution may be **disposed**.

 Core Observable concerns:
 * **Creating** Observables
 * **Subscribing** to Observables
 * **Executing** the Observables
 * **Disposing** Observables

 ### Creating Observables
 * The **Observables** constructor takes one argument: **the subscribe function**
 * Observable can be created with **new Observable**. Most commonly, observables are created using creation functions, like **of, from, interval** , etc

 ```js
 import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});
 ```

 ### Subscribing to Observables
 * we can subscribe observable like that:

 ```js
 observable.subscribe((x) => console.log(x))
 ```

* This shows how subscribe call are not shared among multiple Observers of the same Observable.
* when calling **observable.subscribe** with an Observer, the function subscribe in **new Observable((subscriber)  => {}) is run for that given subscriber.**.
* Each call to **observable.subscribe** triggers its own independent setup for that given subscriber.

``Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to .``


### Executing Observables
* The code inside **new Observable(...)** represents an "Observable execution", a lazy computation that only happens for each Observer that subscribes.
* It has three types of values
    * "Next": notification: sends a value such as Number,string, object ..
    * "Error" notification: Sends a JS Error or Exception
    * "Complete" notification: does not send a value

* "Next" notification is most important and most common type: they represent actual data being delivered to a subscriber.

```js
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    try {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.complete()
    subscriber.next(4) // is not delivered because it would violate the contract
    } catch(err) {
        subscribe.error(err);  // delivers an error if it caught one
    }


    
})

```

### Disposing Observable Executions
* we want to **unsubscribe** to observable because Observable may be infinite.
* Maybe we need an API for cancelling an execution.


### ===========> SUMMARY
* Observable is collection of Push Order
* it has 4 core concept
    * create observable (Observable((subscribe) => { ... }))
    * subscribe to Observable ( subscribe)
    * execute observable (next,error or complete)
    * disposing observable ( unsubscribe)