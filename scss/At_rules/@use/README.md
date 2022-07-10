## @use
* The **@use** rule loads mixin, function and variable from other SaaS stylesheets and combine  CSS from multiple stylesheet together. Stylesheet loaded by **@use** are called "module".

```scss
// src/_corners.scss
$radius: 3px;
@mixin rounded {
    border-radius: $radius;
}

// style.scss
@use 'src/corners',
.button {
    @include corners.rounded;
    padding: 5px + corners.$radius;
}
```

#### Choosing a Namespace   
* By default, a modules namespace is just last component of its URL. However we want to change it so that we might use **as** <url> as <new_namespace>

```scss
// src/_corners.scss
$radius: 3px;
@mixin rounded {
    border-radius: $radius;
}

// style.scss
@use 'src/corners' as c,
.button {
    @include corners.rounded;
    padding: 5px + corners.$radius;
}
```

* Also we can load a module without using any namespace by writing **@use "url" as ***.
```scss
// src/_corners.scss
$radius: 3px;
@mixin rounded {
    border-radius: $radius;
}

// style.scss
@use 'src/corners' as *,
.button {
    @include rounded;
    padding: 5px + $radius;
}
```
### ====> Summary
* Loads a separate stylesheet as a module
* Also, we can give another namespace by using **as**
```scss
@use 'src/_color' as c 
```