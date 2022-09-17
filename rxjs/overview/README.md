### Introduction
* RxJS is a library for composing asynchronous and event-based programs by using observable sequences.
* It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by **Array** methods (map, filter, reduce, every etc) to allow handling asynchronous events as collections.

``We can think that RxJs is lodash for events``

The essential concepts in **RxJS** which solve async event management are:
* **Observable**: **represents** the idea of an invokable collection of future values or events.
* **Observer**: is a collection of callbacks that knows how to listen to value delivered by observable.
* **Subscription**: represents the execution of an Observable, is primarily useful for cancelling  the execution.
* **Operators**: are pure functions that enable a functional programming style of dealing with collections with operations like **map**, **filter**, **concat**, **reduce**, etc.
* **Subject**: is equivalent to an EventEmitter, and the only way of multicasting  a value or event to multiple Observers.
* **Schedulers**: are centralized dispatchers to control concurrency

Examples:
```js
// Normally we register event listeners.

document.addEventListener('click',()=> console.log('click'));

// Using RxJS, we create an observable instead.

import { fromEvent } from 'rxjs';

fromEvent(document,'click').subscribe(()=> console.log('clicked '))

```