const registerServiceWorker = async () => {
  if (window.navigator.serviceWorker) {
    console.log("service worker is available!!");
    try {
      const registiration = await window.navigator.serviceWorker.register(
        "./sw.js",
        {
          scope: "/",
        }
      );

      if (registiration.installing) {
        console.log("Service worker installing");
      } else if (registiration.waiting) {
        console.log("Service worker installed");
      } else if (registiration.active) {
        console.log("Service worker active");
        const cache = await caches.open("v1");
        const keys = await cache.keys();
        const img = keys[0].url;
        const wrapperDiv = document.querySelector("#show-image");
        const imgElement = document.createElement("img");
        imgElement.width = "200";
        imgElement.height = "100";
        imgElement.src = img;

        wrapperDiv.appendChild(imgElement);
      }
    } catch (e) {
      console.log(`Error: ${e} `);
    }
  }
};

registerServiceWorker();
