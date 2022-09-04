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

### Go Detail of Some Page
* We will just add new route or change current route path
* After add this route, it will not work properly

```tsx
import { someList } from '../data';


{someList.map((list) => (
    <Link 
    to = {`/invoice/${list.id}`}>
    key={invoice.id}
    >
    {invoice.name}
    </Link>
))}

```

* After click the Link button, we will nothing
* We need to add "No Match" Route

### Adding "No Match" Route
* In order to catch other route that is not defined, we have to define "*" path
* "*" has special meaning.

```tsx
...

<Route
    path="*"
    element = {<main> <p> There's  nothing here!</p> </main> }
/>

...
```

 ### Reading URL Params
 * If we want to add detail URL like `invoice/1998`
 * We need to define this in `Route`
 
 #### Let's add detail Route
 * we will add new `Route` 

 ```tsx
 ...
 <Route path="invoices" element={<Invoices />}>
    <Route path=":invoicesId" element={<Invoice />} />
</Route> 
***
 ```

* We just created a route like `/invoices/2005` or  `/invoices/1998`
* Also, we added second layer for `invoices`
* Now, we need to arrange `invoices.tsx` and `invoice.tsx`

```tsx
import { Link, Outlet } from "react-router-dom";
...
 {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
...
 <Outlet />
...
```
* Now, it is time to create `invoice.tsx` 
* Let's see that how to get `invoiceId`
* we should use `useParams`

```tsx
import { useParams } from "react-router-dom";

export default function Invoice() {
    const params = useParams();
    return <h2> {params.invoicedId} </h2>
}
```

### Active Links
* This is very common, especially in navigation lists, to display the link as the active link the user is looking at.

```tsx
// invoices.tsx

import { NavLink, Outlet } from 'react-router-dom'

export default function Invoices() {
    return (
        <div> 
        {invoices.map((invoice) => 
        <NavLink
        style={({ isActive }) => {
            return {{
                color: isActive?"red":"",
            }}
        }} 
        to={`/invoices/${invoice.number}`}
        key={invoice.number}
       >
       {invoice.name}
       </NavLink>
       )}
        </div>
    )
}
```

* We swapped `Link` for `NavLink`
* We used style like function

### Navigation Programmatically
* Most of the time  the URL changes is in response to the the user clicking a link
* But, sometimes programmer want to change the URL.
* A very common use case is after a data update. (creating or deleting)

* We will use ***useNavigate*** to navigate other page
* We will use **useLocation** 

```tsx
export default function Invoice() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return (
        ...
            <button onClick={()=> {
                navigate(`/invoices${location.search}`)
            }}>
            Delete
            </button>

        ...
    )
}

```

###  ===========> SUMMARY
* We should wrap `BrowserRouter`
* Use `<Link to="/invoices"> Invoices </Link>` to navigate with history
* We should define `<Routes>` under the BrowserRouter
* we can use nested `Route` 
```tsx
<Route path="/"> {/* not to miss template */}
    <Route path="expense" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
</Route>
```
* We should use `<Outlet />`, to renter nested router
* For the Detail, we need to add "No match" route by using **'*'** 
```tsx
<Route
    path="*"
    element= {<main> There's nothing here! </main> }
/>
```
* Arranged **Route** 
```tsx
<Route path="invoices" element={<Invoices />}>
    <Route path=":invoicesId" element={<Invoice />}>
</Route>
```
* **useParams** to access to paramId
* NavLink to detect active link (**<NavLink />**)
* Used **useNavigate** to navigate programmatically

```tsx
export default function Invoice() {
    const navigate = useNavigate();

    ...
    <button onClick={()=> {
        navigate('/invoices'+ location.search);
    }}> Delete </button>

    ...
}
```