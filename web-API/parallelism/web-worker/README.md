### Web Worker

- A **web worker** is a JS that is running in the background, without affecting the performance of the page.

- When executing scripts in an **HTML page**, the page becomes **unresponsive** until the script.

- A **web worker** is a JS that runs in the background, independently of other scripts, without affecting the performance of the page. We can continue whatever we want: clicking, selectiong things etc. while the **web worker runs** in the **background**.

### How is it Work?

- In order to use **Web Worker**, we should create **new js file**, in web worker JS file can not manupulate **DOM**

- After create **worker.js** file, we should communicate to worker file from **main** application.

- **worker.js** includes a function that name is **onmessage**, this triggered while it is triggered.

- to communicate from **worker.js** to **main.js**, we can use **postMessage()** that is coming from **global JS**.

- in the **main.js**, we can use **worker.onMessage()** to get data from **worker.js**

### Example

- Main.js

```js
if (window.Worker) {
  // check if browser support web worker
  const myWorker = new Worker("worker.js");

  first.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
}
```

- worker.js

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

- if we want to terminate it, we can use

```js
myWorker.terminate();
```

### ==============> Summary

- Web worker uses for the script that should run background
- And also, we can handle comlex computationaly thing in web worker
- we can not manupulate DOM
- There are some **global and helper function** that we should know,
  - **onMessage**: we can get the data from **web worker or main js** (worker.onmessage)
  - **postMessage**: We can use this method when we want to pass data from **web worker or mainJS**

* for more information we can review the files
