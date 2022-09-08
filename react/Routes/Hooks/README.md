### useHref
* The `useHref` hooks returns a URL that may be used to link to given  `to` location, even outside of React Router.

### UseLocation
* This hooks returns the current `location` object,
* This can be useful if we would like to perform some side effect whenever the current location changes.

 ```tsx
 import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}
 ```

 ### useNavigate
 * The `useNavigate` hooks returns a function that lets us navigate programmatically
 * If using `replace: true`, the navigation will replace the current entry in the history stack instead of adding new one.

 ```tsx
 import { useNavigate } from "react-router-dom";

function SignupForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(event.target);
    navigate("../success", { replace: true });
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
 ```

 ### useParams
 * The `usePrams` hook returns an object of **key/value** pairs of the dynamic params from the current URL.

 ```tsx
 import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
} 
 ```

 ### useRoutes
 * The `useRoutes` hooks is the functional equivalent of `<Routes>`, but it uses JS object instead of `<Route>` element.
 * These objects have the same properties as normal `<Route>` elements, but they don't require JSX.
 * The return of `useRoutes` is either a valid React element we can use to render the route tree, or `null` if nothing matched.

 ```tsx
 import * as React from "react";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    { path: "team", element: <AboutPage /> },
  ]);

  return element;
}
 ```