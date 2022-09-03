### REACT Routes
* React Router is fully-featured client and server side routing library for **REACT**.

``
npm install react-router-dom@6
``

### FIRST STEP
* We should connect our app to **Browser's URL**.
```tsx
...
import { BrowserRouter } from 'react-router-dom';

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
```

### Add Some Links
* We will add some links
* If we use Link, we can also use browser back/forward button 

```tsx
import { Link } from 'react-router-dom';

export default function App(){
    return (
        <div>
            <nav>
                <Link to="/invoices"> Invoices </Link>
                <Link to="/expenses"> Expenses </Link>
            </nav>

        </div>
    )

}

```

### LET'S ADD SOME ROUTES
```tsx
// In App.tsx
...
import {BrowserRouter, Routes, Route} from 'react-router-dom';

<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}> {/* Assume that <Expenses /> already implemented */}
        <Route path="invoices" element={<Invoices />}> {/* Assume that <Invoices /> already implemented */}
    </Routes>
</BrowserRouter>
```

 ***Notice:*** 
 * "/" renders <App />
 * "/invoices" renders <Invoices />
 * "/expenses" renders <Expenses />
 
 ### Nested Routes
 * we noticed that when clicking the links that the layout in `App` disappears
 * Repeating shared layouts is pain in the neck
 * And also, most UI is a series of nested layouts that almost map to segments of URL.
 * Also, we want to implement Role base Authorization.
 * In order to achieve, we have to use nested routes and use ***Outlet***

 #### In main.tsx
```tsx
...

<BrowserRouter>
    <Routes>
        <Route path="/">
            <Route path="expense" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
        </Route>
    <Routes>
</BrowserRouter>
```

* it nests the URLs ("/" + "expenses" and "/" + "invoices")
* It will nest the UI components for shared layout when the child route matches
* In the **App.tsx** we need to render **Outlet**

```tsx
import { Outlet, Link } from "react-router-dom";

export default function App(){
    return(
        <div>
            <nav>
                <Link to="/invoices"> Invoices </Link>
                <Link to="/expenses"> expenses </Link>
            </nav>
            <Outlet />
        </div>
    )
}
```

* Now, Click around again. The parent route ('app.js') persist while the `<Outlet />` swaps between
the two child routes (`<invoices>` and `<Expenses>`)!
* This hierarchy is incredibly powerful