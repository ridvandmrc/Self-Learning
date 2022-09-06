### Hash Router
* `<HashRouter>` is for use in web browser when URL should not (or can not) be sent to server for some reasons.
*  This may happen in some shared hosting scenarios where you do not have full control over the server.

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    {/* The rest of your app goes here */}
  </HashRouter>,
  root
);
```