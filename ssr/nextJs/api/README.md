### API Routes

- **API** routes provide a solution to build our **API** with Next.js.
- Any file inside the folder **pages/api** is mapped to **/api/\*** and will be treated as an API endpoint instead of a **page**.
- They are server-side only bundles and **won't** increate our client-side bundle size.

```ts
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
```

- An **API** route to work, we need to export a function as default (**request handler**), which receives the following parameters:

- **req**: An instance of incoming message, plus pre-build middlewares
- **res**: An instance of response, plus some helper functions.

* To handle different **HTTP** methods in an API route, we can use **req.method** in our request handler like:

```ts
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
```

### Dynamic API Routes

- Like **pages**, we can follow same way for **dynamic api routes**
- For example, the API route **pages/api/post/[pid].js**.

* we should use **req.query**

```js
export default function handler(req, res) {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
}
```

### ======> Summary

- We can provide api in Nextjs
- we should define the api under **page/api**
- Api will be handled as endpoints automatically.
- we can use **req and res** to handle parameters
- **req.method** can be used to handle req type
- for dynamic routes, we can apply same approach like **page**
