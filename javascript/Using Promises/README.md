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