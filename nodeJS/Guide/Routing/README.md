### Routing
* **Routing** refers to how an application's endpoints (URIs) respond to client requests. 
* We can define routing using methods of the Express app object that correspond to HTTP methods: **app.get()**, **app.post()**
* Also we can use **app.all()** and we can use **app.use()** to specify middleware as the callback function
* In Fact, routing methods can have more than one callback function as **arguments**. it important to provide next as an argument and call **next()**

```js
app.all('/secret',(req,res,next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

```

### Route paths
* Route paths, in combination with a request method, define the endpoints at which requests can be made.
* The characters ?,+,* and () are subsets of their regular expression counterparts.
- The hyphen(-) and the dot(.) are interpreted literally by string-based paths

#### ===> Some example
`(?) will match acd and abcd`
```js
app.get('/ab?cd',(req,res) => {
    res.send('ab?cd')
})

```
`(+) will match abcd, abbcd, abbbbcd and so on`

```js
app.get('/ab+cd',(req,res) => {
    res.send('ab+cd')
})
```

`(*) will match abcd, abbcd, abbxcd, abRONDOMcd, ab123cd and so on`

```js
app.get('/ab*cd',(req,res) => {
    res.send('ab*cd')
})
```

`(xxx)? will match /abe and /abcde`

```js 
app.get('/ab(cd)?e',(req,res)=>{
    res.send('ab(cd)?e')
})
```

`Example of route paths based on regular expressions:`
`This route path will match anything with an "a" in it.`

```js
app.get(/a/,(req,res)=>{
    res.send('/a/')
})
```

`This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman and so on`

```js
app.get(/.*fly$/,(req,res) => {
    res.send('/.*fly$/')
})
```

#### Route parameters
* Route parameters are named **URL segments** that are used to capture the values specified at their position in the **URL**.
* The captured values are populated in the **req.params** object, with the name of the route parameter specified in the path as their respective keys

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

* To define routes with route parameters, simply specify the route parameters in the path of the route as shown below

```js
app.get('/users/:userId/books/:bookId',(req,res)=>{
    res.send(req.params)
})

```

* since the hyphen(-) and the dot(.) are interpreted literally, they can be used along with route parameters for **useful purpose**.

```
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
```

### Route handlers
* we can provide multiple callback functions that behave like **middleware** to handle a request.
* The only exception is that these callbacks might **invoke** **next('route)** to bypass the remaining callbacks.
** we can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes 

```js
app.get('/example/b',(req,res,next) => {
    console.log('response will be sent by the next function ...')
    next()
}). (req,res) => {
    res.send('Hello from B')
}

```
`An array callback function can handle a route`

```js
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
```

`Combination of independent functions and arrays of functions can handle a route`

```js
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})
```

### Response Methods
* The methods on the response object (res) in the following table can send.

* **res.download()**: Prompt a file to be downloaded
* **res.end()**: End the  response process.
* **res.json()**: Send a JSON response
* **res.jsonp()**: Send a JSON response with JSONP support
* **res.redirect()**: Redirect a request
* **res.render()**: Render a view template
* **res.send()**: send response of various type
* **res.sendFile()**: send a file as an octet stream
* **res.sendStatus()**: set the response status code and send its string representation as the body response

### app.route()
* We can create **chainable** route handlers for a route path by using **app.route()**.
* The path is specified at a single location,creating modular routes is helpful, as is reducing redundancy and typos.
```ts
app.route('/book')
  .get((req,res)=>{
    res.send('Get a random book')
  })
  .post((req,res) => {
    res.send('add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
```

### express.Router
* Use the **express.router** class to create modular, mountable route handlers. A **Router** instance is a complete middleware and routing system; for this reason , it is often referred to as a "mini-app"

* Following example creates a router as a module, loads a middleware function in it.

```js
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/',(req,res) => {
  res.send('birds home page')
})

router.get('/about',(req, res) => {
  res.send('About birds')
})


module.exports  = router

```
* Then, load the router module in the app:

```js
const birds = require('./birds')
// ..
app.use('/birds',birds)

```

* The app will now be able to handle request to **birds** and **birds/about**

## ======> Summary
* Classic routing is:
```js
app.get('/'), app.post('/'), app.all('/')
```
* We can use special characters in request
  *  **(?)**: 'ab?cd' will match acd and abcd
  * **(+)**: 'ab+cd' will match abcd, abbcd, abbbbcd and so on
  * **(\*)**: 'ab*cd' will match abcd, abbcd, abRANDOMcd, ab123cd and so on
  * **(xxx)?**: 'ab(cd)e' will match /abe and abcde
  * **Regex**: '.*fly will match dragonfly and butterflyman 
* Route Parameters:
  * header request parameter
  ```js
  app.get('/users/:userId/books/:bookId',(req,res)=>{
    req.params
  })
  ```
* **Route handlers**: we can invoke 'next(route)'
  * we can handle pre-condition
  ```js
  app.get('/example/b',(req, res, next) => {
    console.log('response will be sent')
    next()
  }).(req, res) => {
    res.send('hello from b')
  }
   // it can evaulate callback

   app.get('/example/d',[cb0,cb1],(req, res, next) => {
    console.log('sd')
    next()
   }),(req,res) => {
    res.send('sda')
   }
  ```
* **app.route()**: we can create chainable route handlers for a route path by using **app.route()**.
```js
app.route('/book')
  .get((req,res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
```
* **express.Router**:
  * express.router class to create a modular
  ```js
  const express = require('express');
  const router = express.Router();

  router.use((req, res, next) => {
    console.log('Time: ',Date.now())
  })

  router.get('/',(req, res) => {
    res.send('birds home page')
  })

  router.get('/about',(req,res) => {
    res.send('about')
  })

  module.exports = router

  // load from  other file

  const birds = require('./birds'
  // ...
  app.use('/birds',birds)
  ```