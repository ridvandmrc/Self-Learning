## Javascript Modules

### A background on modules

beginning usage of JS,  providing interactivity so large script is not needed. A few years later, we have complete application run in browser with a lot of JS.

therefore, recent years to start thinking about providing mechanisms for splitting JS programs up into separate modules that can be imported when needed. ***Node.js*** has had this ability for a long time.

``
Most of browser support import and export.
``

### Exporting module features

if we want to access a module,  we have to ***export*** it firstly.

the easiest way to use it to place it in front of any items that we want to exported out of module.

```js
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

```

we can export more than one items in a line like ;

```js
export { name, draw, reportArea, reportPerimeter };
```

### Importing features into our script
Once we have exported some modules, we need to import them our script

simple way,
```js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```

we can import a module in HTML file,
```html
<script type="module" src="main.js"></script>
```

### Default exports versus named exports
There is a type of export called the **default export** purpose of this make it easy to have default function provided by module.

some examples of default export usage;

```js
export default randomSquare;
// export as default function
export default function(ctx) {
  ...
}
// we can import the default function like;
import randomSquare from './modules/square.js';
```

Again, note the lack of curly braces. This is because there is only one default export allowed per module,  and we know that ***randomSquare*** is it. for shorthand.

```js
import {default as randomSquare} from './modules/square.js';
```

### Avoiding naming conflicts
* What happen if we have same named function in different module? 
* How can we import in one module?

### Renaming imports and exports
Inside our ***import*** and ***export*** statement's curly braces. we can use keyword ***as*** along with a new feature name, to change the identifying name.

let's look at below examples:

```js
// inside module.js
export {
    function1 as newFunctionName,
    function2 as anotherFunctionName
}

// inside main.js
import {newFunctionName, anotherFunctionName} from 'module.js'

// importing as a different naming

// inside module.js
export {function1,function2};

// inside main.js

import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from 'module.js'
```

For example, below functions have same method names.

```js
export { name, draw, reportArea, reportPerimeter }
```

we want to import it same modules. like;
```js
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import { name, draw, reportArea, reportPerimeter } from './modules/circle.js';
import { name, draw, reportArea, reportPerimeter } from './modules/triangle.js';
```

The browsers throw exceptions such as "SyntaxError: redeclaration of import name"

we have to rename the imports that they are unique:

```js
import { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter } from './modules/square.js';

import { name as circleName,
         draw as drawCircle,
         reportArea as reportCircleArea,
         reportPerimeter as reportCirclePerimeter } from './modules/circle.js';

import { name as triangleName,
        draw as drawTriangle,
        reportArea as reportTriangleArea,
        reportPerimeter as reportTrianglePerimeter } from './modules/triangle.js';
```

### Creating a module object

previous example works Fine, but it's a little messy. Better solution is to import each module's features inside a module object. like;

```js
import * as Module from './modules/module.js';
```

this methods stores all exported function in ***Module*** object. We can use them like;

```js
Module.function1()
Module.function2()
etc.
```

### Modules and Classes

we can also import and export classes, this is another option to avoid conflicts.

let's see the previous code in class perspective.

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}

// Then export 
export { Square };
```

### Aggregation modules

Sometimes we want to aggregate modules together.

this is possible using export syntax of following forms in the parent module.

```js
export * from 'x.js'
export { name } from 'x.js'
```

### Dynamic Module Loading

JS allow us to load modules dynamically and also this has some obivous performance advantages.

we have a new function that named ***import ()***. it return a Promise,

usage;
```js
import('./modules/myModule.js')
  .then((module) => {
    // Do something with the module.
  });
```
### ===> Summary
* export default: default exported function from module
* Avoid name conflict;
    * use ***as*** in curly brace to change exported name {realName as newName}
    * create module object 
    ```js
    import * as module from '...'
    ```
* Aggregation module like:
    ```js
    export * from "x.js"
    ```
* Dynamic Module Loading: we can provide it by using import function
```js
import('./modules/myModule.js')
  .then((module) => {
    // Do something with the module.
  });
```