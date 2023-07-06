self.addEventListener("install", async (event) => {
  const cache = await caches.open("v1");

  cache.add(
    "https://openclipart.org/image/2400px/svg_to_png/190594/db-blue.png"
  );
});

self.addEventListener("activate", async (ev) => {
  const cache = await caches.open("v1");

  cache.delete(
    "https://openclipart.org/image/2400px/svg_to_png/190594/db-blue.png"
  );
});

self.addEventListener("fetch", async (ev) => {
  // ev.request each time the webpage asks for any resource.
  //Extendable Event
  console.log(`fetch request for: ${ev.request.url}`);

  // check cache and response it

  const cache = await caches.open("v1");

  cache.match(ev.request).then((res) => {
    if (!res) {
      console.log("cache miss for: ", ev.request.url);
    } else {
      console.log("cache hit for: ", ev.request.url);
    }

    return res || fetch(ev.request);
  });

  // ev.responseWith(fetch(ev.request));
});
