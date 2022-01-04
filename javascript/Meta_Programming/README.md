## Meta Programming

### Proxies
***Proxy*** object allow us to intercept certain operations and to implement custom behaviors.

it join component new behavior.

```js
let handler = {
  get: function(target, name) {
    return name in target ? target[name] : 42
  }
}

let p = new Proxy({}, handler)
p.a = 1
console.log(p.a, p.b) // 1, 42
```

The proxy Object defines a ***target*** and a ***handler*** object, in which a ***get*** trap is implemented. Object that is proxied will not return ***undefined*** when getting undefined properties, but will instead return the number 42.