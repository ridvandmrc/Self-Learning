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