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

### Terminology

Fallowing terms are used when talking about the functionality of proxies.

***handler:*** Placeholder object which contains traps.

***traps:*** The methods that provide property access

***target:*** Object which the proxy virtualizes. it is often used a storage backend for the proxy.

***invariants:*** Semantics that remain unchanged when implementing custom operations are called invariants.

Some important ***Handlers*** and ***traps***

| Handler/trap   |      Interceptions      |  Invariants |
|----------|:-------------:|------:|
| handler.defineProperty() |  Object.defineProperty()Reflect.defineProperty()|  |
| handler.has() |    foo in proxy, reflect.has()   |    |
| handler.get() | proxy[foo],proxy.bar |     |
| handler.set() | proxy[foo] = bar, proxy.foo = bar |     |
| handler.deleteProperty() | delete proxy[foo], delete proxy.foo |     |
| handler.enumerate() |for (let name in proxy) {...} |     |

## ===> SUMMARY
* Proxy object allow us to intercept certain operations and implement custom behavior.
* Handler: Placeholder
* traps: default methods
* target: object that proxy virtualizes.