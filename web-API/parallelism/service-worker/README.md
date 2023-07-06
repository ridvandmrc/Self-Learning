### Service Worker

- Service worker is a **proxy** that sit between web applications, the browser, and the network.
- Service worker can enable **offline experience**, intercept **network requests** and also can allow to access push notification.

### Service worker concepts and usage

- Service worker is an event-driven worker registered against an **origin and a path**.
- It takes from of Javascript file that can control the web-page/site that is associated with, intercepting and modifying navigation and resource requests.
- Service worker is run in a worker context, therefore has no **DOM access**, and runs on a different thread to the main JS that powers our app. so it is non-blocking.

### Some use cases

- Background data syncronization
- Responding to resource requests from other origins.
- updates expensive to calculate data such as geolocation or gyroscope
- performance enhancements, pre-fetching
- API mocking

### Basic Architecture

Following the steps generally observed for basic setup:

- The service worker code is fetched and then registered using **serviceWorkerContainer.register()**. If successful, the serice worker is executed in a **ServiceWorkerGlobalScope**.

* Installation take place. An **install** event is always first one sent to a service worker (this can be used start the process of populatiın an indexedDB, and caching site assets to use offline mode),

* when the **install** handler completes, the service worker is considered installed. At this point a previous version of the service worker may be active and controlling open pages. Beacuse we don't want two different version of the same service worker.

* Once all pages controlled by the old version of the service worker have closed, it's safe to retire the old version, and the newly installed service worker receives an **activate event**. Primary use of activate is tı clean up resources used in previous versions of service worker. then, call **skipWaiting()**.

### DEMO

- This is the basic example of registering and installing a service worker, we created a demo called simple service worker, It will get image from **fetch** API.

### Registering Service Worker

```js
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();
```

- test to make sure **service workers** are supported before register.

### Install and activate: Population our cache

- After successfully registered, Browser will attempt to install then activate the service worker.
- The **install** event is fired when an installation is successfully completed.
- The **install** event is generally used to populate our browser's offline caching capabilities with assets our need to run our app offline.
- To do this, we should use **ServiceWorker's storage API**
- This storage works similar way to the browser's standard cache, but is it specific to our domain.

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1"); // open SW cache
  await cache.addAll(resources); // add the resource
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ])
  );
});
```

- We add an **install** event listener to the service worker and then chain a **ExtendableEvent.waitUntil()** method onto the event -- this ensure that service worker will not install until the code inside **waitUntil** has successfully occured.

- Inside **addResourceToCache()** we use the **caches.open()** method to create a new called **v1**, Then we call a function **addAll()**

### ========> Summary

- Service Workers is a **proxy** between web applications, browser and network.
- It also enable offline experience, **intecept network request and access push notifications**
- Firstly, it should be **registered** to service worker (if succeed it should work Service worker global scope).
- An **install** event is always first one sent to a service worker.

### When should we use Service worker?

- With service worker, we can track all **fetch** request so that we can cache most important request for offline experience
- We can store font and important images
- and also we can intercept notification

For example look at the file
