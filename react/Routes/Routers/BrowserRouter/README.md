### Browser Router
* `<BrowserRouter` is the recommended  interface for running React router in a web browser.
* It stores the current location in the browser's address bar using clean URLs and navigates using the ***browser's built-in history stack*** 

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,
  root
);
```