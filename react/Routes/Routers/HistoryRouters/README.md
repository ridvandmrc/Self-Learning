### History Router
* It takes an instance of the `history` library as prop
* This allow us to use that **instance** in non-React context or as a **global variable**

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

ReactDOM.render(
  <HistoryRouter history={history}>
    {/* The rest of your app goes here */}
  </HistoryRouter>,
  root
);
```
