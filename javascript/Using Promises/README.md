## Using Promises

A ***Promise*** is an object representing the eventual completion or failure of an asynchronous operation.

Essentially, a promise is a returned object to which you attach callbacks.

* One example;

```js
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

// if we write it without Promise,
createAudioFileAsync(audioSettings, successCallback, failureCallback);

// it we write it with promise.
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

### Guarantees

Unlike old-fashioned passed-in callbacks, a promise comes with some guarantees:

* Callbacks added with ***then*** will never be invoked before the completion of the current run of the JavaScript event loop.

* These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents

* Multiple callbacks may be added by calling ***then()*** several times. They will be invoked one after another, in the order in which they were inserted.

One of the great things about using promises is ***chaining***.

### Chaining

A common need is to execute two or more  ascynchronous operation back to back. We can accomplish this by creating a ***promise chain***.

Here's the magic: the ***then()*** function returns a **new promise**, different from original:
```js
// easy usage
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

The arguments to ***then*** are optional and ***carch(failureCallback)*** is short for ***then(null,failureCallback)***

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

### Chaining after a catch
It's possible to chain after a failure which is useful to accomplish new actions even after an action failed in the chain.

```js
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});

// output
Initial
Do that
Do this, no matter what happened before
```

### Creating a Promise around an old callback API
In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. Most common example is ***setTimeout()***:
```js
setTimeout(() => saySomething("10 seconds passed"), 10*1000);
```
this is old style and it has some problem. If ***saySomething()*** fails or contains a programming error, nothing catches it.

we should wrap setTimeout in a promise.

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10*1000).then(() => saySomething("10 seconds")).catch(failureCallback);
```

### Composition
***Promise.resolve()*** and ***Promise.reject()*** are shortcuts to manually create an already resolved or reject promise respectively.

***Promise.all()*** and ***Promise.race()*** are two composition tools for running asynchronous operations in parallel.

```js
Promise.all([func1(), func2(), func3()])
.then(([result1, result2, result3]) => { /* use result1, result2 and result3 */ });
```

Sequential composition is possible using some clever JS.

```js
[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
.then(result3 => { /* use result3 */ });
```

### Timing

To avoid surprises, functions passed to ***then()*** will never be called synchronously, even with an already-resolved promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```
````js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```