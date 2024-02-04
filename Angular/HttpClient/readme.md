## Http Client

- Most front-end applications need to communicate with a server over the **http** protocol.
- Angular provides a client **HTTP API** for angular applications.
- it is located in `@angular/common/http`.

### Making HTTP requests

- `HttpClient` has methods coressponding to the differenr HTTP verbs used to make requests.

### Fetching JSON data

- Fetching data from a backend often requires making a **GET** request using the `HttpClient.get()`.

```ts
http.get<Config>("/api/config").subscribe((config) => {
  // doing someting
});
```

### Fetching Other Type

- By default, `HttpiClient` asssumes that servers will return **JSON** data.
- If you want to change, you should modify `responseType`

```ts
http
  .get("/images/dog.jpg", { responseType: "arraybuffer" })
  .subscribe((buffer) => {
    console.log("Image is", buffer);
  });
```

- Other response types are ` json | text | arrayBuffer | blob`

## POST request

```ts
http.post<Config>("/api/config", newConfig).subscribe((config) => {
  console.log("testt");
});
```

### Setting URL Parameters

- Specify request parameters that should be included in the request URL using the `params` option.

```ts
http
  .get("/api/config", {
    params: { filter: "all" },
  })
  .subscribe((config) => {...});
```

### Setting request headers

- Specify request headers that should be included in the request using the **headers** option.

```ts
http.get("/api/config", {
  headers: {
    "X-Debug-Level": "verbose",
  },
});
```

## Interceptors

- `HttpClient` supports a form of middleware known as **_interceptors_**.

#### Some common example of Interceptors

- addming authentications headers
- retrying failed request
- caching responses for a period of time
- ...

### Defining an Interceptor

- DI based interceptors are identical to those of functional interceptors.
- We can use `HttpInterceptor` interface.

```ts
@Injectable()
class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<> {
    console.log("URL: " + req.url);
    return handler.next(req);
  }
}
```

- Then Interceptor should have added in **providers**

```ts
...
provide:HTTP_INTERCEPTORS,useClass:LogginInterceptor,multi:true
...
```
