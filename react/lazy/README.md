### LAZY LOADING

- For react example, you can click [here](https://github.com/ridvandmrc/react-lazy)

- in default configuration, React is downloading all component in the app
- we can find the files in developer tools

* in order to manage this, React released **React.lazy**

#### Classic Way

```tsx
import { Home } from "./Home";

export const App = () => {
  return <Home> Test </Home>;
};
```

#### Performansive way

```tsx
import { lazy } from "react";

const Home = lazy(() => import("./Home"));

export const App = () => {
  return <Home> Test </Home>;
};
```

### Wait until it render

- **import** is async function, it might be some times to render actual component

- We should solve this problem, React has a component to solve this name is **Suspense**

* **Suspense** has a one attribute that name is fallback, we should define fallback component in there

```tsx
import { lazy } from "react";

const Home = lazy(() => import("./Home"));

export const App = () => {
  return (
    <Suspense fallback={() => <h1> Loading...</h1>}>
      <Home>Test</Home>
    </Suspense>
  );
};
```

#### What happen if component does not have default export

- In the modern React, we are creating functional component and the components do not have default export

* in this scenerio we can import the component other ways

```tsx
// Home.tsx
export const Home = () => <div> Home Page</div>;

// App.tsx
import { lazy, Suspense } from "react";

const Home = lazy(() =>
  import("./Home").then((module) => {
    return { default: module.Home };
  })
);
export const App = () => {
  return (
    <div>
      <Suspense fallback={() => <h1>Loading !!</h1>}>
        <Home />
      </Suspense>
    </div>
  );
};
```

#### Useful for conditional rendering

- we can use lazy loading for conditional rendering
- and also, **useTransition** might be useful for render the component,
- because **useTransion** renders the component is operation is done

```tsx
// Home.tsx file
import { lazy, useState, useTransition } from "react";

// if we don't want to show fallback we can use useTransition

const Admin = lazy(() => import("./Admin"));

export const Home = () => {
  const [isAdming, setIsAdmin] = useState(false);
  const [isPending, setTransition] = useTransition();
  return (
    <div>
      {/* the fallback will not be rendered because setAdmin is change when it completely ready */}
      <button onClick={() => setTransition(() => setIsAdmin(!isAdmin))}>
        Toggle
      </button>
      {isPending && "loading" /* loading with useTransition */}
      {/* Only loaded for admin */}
      <Suspense fallback={() => <h2>Loading!!! </h2>}>
        {isAdmin ? <Admin /> : "normal"}
      </Suspense>
    </div>
  );
};
```

### ====> Summary

- if we have a performance problem aspecially on loading time, we need to think about **lazy**

* lazt function is works async so it can not be ready just in time so we need to show someting while is rendering
* solution is **Suspense**

```tsx
const Home = lazy(() => import("./Home"));

export const App = () => {
  return (
    <Suspense fallback={() => <h1> Loading...</h1>}>
      <Home>Test</Home>
    </Suspense>
```

- if component does not have default export, we can return object **then** import

* we have to use this way aspecially conditional rendering if the component that will render is heavy
