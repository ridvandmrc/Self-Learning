### Middleware
* **middleware** functions are functions that have access to the request access to the **the request object(req), the response and the next function** in the application's request-response cycle.
* The next function is a function in the express router which is invoked, executes the middleware succeeding the current middleware.
* Middleware function can perform the following tasks:
    * Execute any code
    * make changes to the request and the response objects.
    * End the request-response cycle
    * Call the next middleware in the stack.
* If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left handing.


### Here is the logger of hello world
```js
const express = require('express')
const app = express()
// Keep history of user action
const myLogger = function (req,res,next) {
    console.log('Logged ',Date.now())
    next();
}

app.use(myLogger)

app.get('/',(req,res) => {
    res.send('Hello world')
})

app.listen(3000)
```

#### Middleware function validateCookies
* Finally, we'll create a middleware function that validates incoming cookies and sends a 400 response if cookies are invalid.
```js
async function cookieValidator(cookies){
    try {
        await externallyValidateCookie(cookie.testCookie)
    } catch {
        throw new Error('Invalid cookies')
    }
}

// Here we use the cookie-parser middleware to parse incoming cookies off the req.

// Endpoints implementation

const express = require('express')
const cookieParser = require('cookie-parser')
const cookieValidator = require('./cookieValidator')

const app = express()

async function validateCookies(req ,res ,next) {
    await cookieValidator(req.cookies)
    next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler

app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})

app.listen(300)
```

### =======> Summary
* Middleware just a functions are functions that have access to the request access to the (req, res and next function)
* Middleware function can be perform the fallowing tasks:
    * Execute any code
    * We can make any changes to the request and the response objects.
    * Call the next middleware in the stack.
* Sample example:
```js
const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
    console.log('Logged: ', Date.now())
    next()
}

app.use(myLogger); // Active the middleware

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(3000)
```