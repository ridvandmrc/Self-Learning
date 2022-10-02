### Using Middleware
* If the current middleware function does not end the request-response cycle, it must call **next()** to pass control to the next middleware function. 
* An Express application can use the following types of middleware:
    * Application-level middleware
    * Router-level middleware
    * Error-handling middleware
    * Build-in middleware
    * Third-party middleware

### Application-level middleware
* Bind application-level middleware to an instance of the **app object** by using the ***app.use()** and **app.METHOD()** functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT or POST) in lowercase.

```js
// This example shows a middleware function with no month path. The function is executed every time the app receives a request.

const express = require('express')
const app = express()

// it will run for all request
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next();
})

// This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the user/:id path.

app.use('/user/:id',(req,res,next) => {
    console.log('Request Type: ', req.method)
    next();
})

// we can declare multiple middleware.

function logOriginalUrl (req, res, next){
    console.log('Request URL: ', req.originalUrl);
    next()
}

function logMethod(req, res, next) {
    console.log('Request Type: ', req.method)
    next()
}

const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
    res.send('user Info')
})
```

### Router-level Middleware
* it works in the same way as application-level middleware, except it is bound to an instance of **express.Router()**.
* Load router-level middleware by using the **router.use()** and **router.Method()** functions.

```js
const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router.

router.use((req, res, next) => {
    console.log('Time: ',Date.now())
    next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path

router.use('/user/:id',(req, res, next) => {
    console.log('Request URL:',req.originalUrl)
    next()
},(req, res, next) => {
    console.log('Request Type:',req.method)
     next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id',(req,res,next) => {
    // if id === 0 then skip to next router
    if(id === '0') next('route')
    // otherwise pass control to the next middleware
    else next()
},(req, res, next) => {
    res.render('regular') // render regular page
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id',(req, res, next) => {
    console.log('id:',id)
    res.render('special')
})

// mount the router on the app
app.use('/',router) // !!!!!!!!!!!!!!
```
* This example shows a middleware sub-stack that handles GET requests to the **/user/:id** path.

```js
const express = require('express')
const app = express()
const router = express.Router()

// predicate the router with a check and bail out when needed

router.use((req, res, next) => {
    if(!req.headers['x-auth']) return next('router')
    next()
})

router.get('/user/:id',(req, res) => {
    res.send('hello, user!')
})

// use the router and 401 anything falling through

app.use('/admin', router, (req,res) => {
    res.sendStatus(401)
})

```

### Error-handling middleware
* it same as  other middleware functions but it accepts 4 arguments

```js
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!')
})
```

### Third-party middleware
* Use third-party middleware to add functionality to Express apps.
`npm install cookie-parser`

```js
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

//load the cookie-parsing middleware
app.use(cookieParser())
```