### Environment Variable for React
* by default,  we have `NODE_ENV`
* For react environment should start `REACT_APP_`
* We should store our secret key environment variable
* The Environment variables are embedded into the build

* After define ``env``, it will also defined on our ``process.env``
Ex. ``REACT_APP_NOT_SECRET_CODE`` will be exposed ``process.env.REACT_APP_NOT_SECRET_CODE``

* We can define ``env`` 2 ways one is define when  run the script
```node
set "REACT_APP_NOT_SECRET_CODE=asd" && npm start
```

* and also we can use ``.env`` file,
*To define permanent environment variables, create a file called `.env`

```
REACT_APP_NOT_SECRET_CODE=asdasd
```