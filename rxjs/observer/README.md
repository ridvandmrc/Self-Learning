### Observer (Subscriber)
* An Observer is a consumer of values delivered by an Observable.
* Observers are simply a set of callbacks.
    Observable: has typical:
    * **Next**: got a next value.
    * **Error**: got an error.
    * **Observer**: got a complete notification
* To use the Observer, provide it to the **subscribe** of an Observable:

``
observable.subscribe(observer);
``
* Observer just object with three callbacks that may also be partial.

```js
const observer = {
    next: x => console.log("Observer got a next value: ",x),
    error: err => console.error("Observer got an error: ",err)
}
```

### ==========> Summary
* we can call it as "Subscriber"
* it has three operator (**next**, **error** and **complete**)
