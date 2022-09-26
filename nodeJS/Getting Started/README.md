### Installing
* Firstly, we have to install **Node.js**
* Then, after creating a **package.json**, we should install `express` 
 ```sh
 npm install express
 ```

 ### Hello World Example
 ```js
 const express = require('express');
 const port = 3000;

 app.get('/',(req,res) => {
    res.send('Hello World');
 })

 app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
 })
 ```

 * This app starts a server and listens on port **3000** for connections.
 * The app responds with "Hello World!" for requests to the root URL **(/) or route**
 * This example above is actually a working server.

 ### Running Locally
 * we can run this by using node
 ```sh
 node app.js
 ```