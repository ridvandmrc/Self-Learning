### Basic Routing
* **routing** refers to determining how an application responds to a client request to a particular endpoint.
* Each route can have one or more handler functions, which are executed when route is matched
* Route definition takes the following structure:
```js
app.METHOD(PATH,HANDLER)
```
* **app**: is an instance of express
* **METHOD**: is an HTTP request method in lowercase.
* **PATH**: is a path on server
* **handler**: is the function executed when the route is matched.

```js
const express = require('express')
const app = express();

app.get('/',(req,res) => {
    res.send('HELLO WORLD!')
})

app.post('/',(req,res) => {
    res.send('GOT a POST WORLD!')
})

app.put('/user',(req,res) => {
    res.send('Got a PUT request /user')
})

app.delete('/user',(req,res) => {
    res.send('Got a DELETE request at /user')
})

```