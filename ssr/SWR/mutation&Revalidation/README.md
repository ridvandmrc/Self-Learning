## Mutate & Revalidation

- SWR provides the **mutate** and **useSWRMutation** APIs for mutating remote data and related cache.

### mutate

- There are 2 ways to use the **mutate** API to mutate the data, the global mutate API which can mutate any key and the bound mutate API which only can mutate the data of corresponding SWR hook.

#### Gloval Mutate

- The recommended way to get the global mutator is to use the **useSWRConfig** hook:

```tsx
import { useSWRConfig } from "swr";

function App() {
  const { mutate } = useSWRConfig();
  mutate(key, data, options);
}

// Also we can import it globally

import { mutate } from "swr";

function App() {
  mutate(key, data, options);
}
```

### Bound Mutate

- Bound mutate is the **short** path to mutate the current key with data.
- **Key** is bounded to **key** passing to **useSWR**, and receive the **data** as the first argument.
- It is functionally equevalent to the global **mutate** function in the previous section but does not require the **key** parameter:

```tsx
import useSWR from "swr";

function Profile() {
  const { data, mutate } = useSWR("/api/user", fetcher);

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          // send a request to the API to update the data
          await requestUpdateUsername(newName);
          // update the local data immediately and revalidate (refetch)
          // NOTE: key is not required when using useSWR's mutate as it's pre-bound
          mutate({ ...data, name: newName });
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
}
```

### Revalidation

- When we call **mutate(key)** (or just **mutate()** bounded) without any data, it will trigger a revalidation for the resource.
- This example shows how to automatically refetch the login info

```tsx
import useSWR, { useSWRConfig } from "swr";

function App() {
  const { mutate } = useSWRConfig();

  return (
    <div>
      <Profile />
      <button
        onClick={() => {
          // set the cookie as expired
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          // tell all SWRs with this key to revalidate
          mutate("/api/user");
        }}
      >
        Logout
      </button>
    </div>
  );
}
```

### Optimistic Updates

- In many cases, applying local mutations to data is a good way to make changes feel faster - no need to wait for the remote source of data
- With the **optimisticData** option, we can update our local data manually, while waiting for the remote mutation to finish.
- **rollbackOnError**, we can alsı control when to rollback the data

```tsx
import useSWR, { useSWRConfig } from "swr";

function Profile() {
  const { mutate } = useSWRConfig();
  const { data } = useSWR("/api/user", fetcher);

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          const user = { ...data, name: newName };
          const options = {
            optimisticData: user,
            rollbackOnError(error) {
              // If it's timeout abort error, don't rollback
              return error.name !== "AbortError";
            },
          };

          // updates the local data immediately
          // send a request to update the data
          // triggers a revalidation (refetch) to make sure our local data is correct
          mutate("/api/user", updateFn(user), options);
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
}
```

### Update Cache After Mutation

- Sometimes, the remote mutation request directly returns the updated data, so there is no need to da an extra fetch to load it.
- we can enable the **populateCache** option to update the cache for **useSWR** with response of the mutation.

```tsx
const updateTodo = () =>
  fetch("/api/todos/1", {
    method: "PATCH",
    body: JSON.stringify({ completed: true }),
  });

mutate("/api/todos", updateTodo, {
  populateCache: (updatedTodo, todos) => {
    // filter the list, and return it with the updated item
    const filteredTodos = todos.filter((todo) => todo.id !== "1");
    return [...filteredTodos, updatedTodo];
  },
  // Since the API already gives us the updated information,
  // we don't need to revalidate here.
  revalidate: false,
});
```

### Conditional Fetching

- Use **null** or pass a function as **key** to conditionally fetch data.

```tsx
// conditionally fetch
const { data } = useSWR(shouldFetch ? "/api/data" : null, fetcher);

// ...or return a falsy value
const { data } = useSWR(() => (shouldFetch ? "/api/data" : null), fetcher);

// ...or throw an error when user.id is not defined
const { data } = useSWR(() => "/api/data?uid=" + user.id, fetcher);
```
