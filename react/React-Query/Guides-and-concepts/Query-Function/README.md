## Query Functions

- A query function can be literally any function that **returns a promise**.
- The Promise that is returned should either **resolve the data** or **throw an error**

- All of the following are valid query function configurations:

```tsx
useQuery(["todos"], fetchAllTodos);
useQuery(["todos", todoId], () => fetchTodoById(todoId));
useQuery(["todos", todoId], async () => {
  const data = await fetchTodoById(todoId);
  return data;
});
useQuery(["todos", todoId], ({ queryKey }) => fetchTodoById(queryKey[1]));
```

### Handling and Throwing Errors

- For React Query to determine a query has errored, the query function **must throw**.
- Any error that is thrown in the query fınction will be persisted on the **error** state of the query.

```tsx
const { error } = useQuery(["todos", todoId], async () => {
  if (somethingGoesWrong) {
    throw new Error("Oh no!");
  }

  return data;
});
```

### Query Function Variables

- Query keys are not juest for uniquely identifying the data we are fetching, but are also conveniently **passed into query function**...

```tsx
function Todos({ status, page }) {
  const result = useQuery(["todos", { status, page }], fetchTodoList);
}

// Access the key, status and page variables in your query function!
function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey;
  return new Promise();
}
```

## Dependent Queries

- Dependent (or serial) queries depend on previous ones to finish before the can execute.
- To achive this, it's as easy as using the **enabled**

```tsx
// Get the user
const { data: user } = useQuery(["user", email], getUserByEmail);

const userId = user?.id;

// Then get the user's projects
const { isIdle, data: projects } = useQuery(
  ["projects", userId],
  getProjectsByUser,
  {
    // The query will not execute until the userId exists
    enabled: !!userId,
  }
);

// isIdle will be `true` until `enabled` is true and the query begins to fetch.
// It will then go to the `isLoading` stage and hopefully the `isSuccess` stage :)
```

### Background Fetching Indicators

- A query's **status === 'loading'** state is sufficient enough to show the initial hard-loading state for a query,
- Maybe we want to display an additional indicator that a query is refetching in the background.
- To do this, queries also supply we with an **isFetching** boolean that we can use to show that it's in a fetching state
- regardless of the state of the **status** variable

```tsx
function Todos() {
  const {
    status,
    data: todos,
    error,
    isFetching,
  } = useQuery("todos", fetchTodos);

  return status === "loading" ? (
    <span>Loading...</span> // loading
  ) : status === "error" ? (
    <span>Error: {error.message}</span> // error
  ) : (
    <>
      {isFetching ? <div>Refreshing...</div> : null}

      <div>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </>
  );
}
```

### Displaying Global Background Fetching Loading State

- In additional to individual query loading states,
- If we want to show a global loading indicator, we can use the **useIsFetching**

```tsx
import { useIsFetching } from "react-query";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null;
}
```

### ========> Summary

- Query function should be returned promise function, it should be either **resolve** or **reject**
- Keys passes to fetch function directly as string or array
- useQuery has a third argument that takes a configuration object and we should use **enabled** or disabled query

```tsx
const { data: user } = useQuery(["user", email], getUserByEmail);

const userId = user?.id;

// Then get the user's projects
const { isIdle, data: projects } = useQuery(
  ["projects", userId],
  getProjectsByUser,
  {
    // The query will not execute until the userId exists
    enabled: !!userId, // wait until userId done
  }
);
```

- GlobalBackground Fetching we can use globalBackground fetching hooks to show a looader

```tsx
import { useIsFetching } from "react-query";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null;
}
```

### Disabling/Pausing Queries

- If we want to disable a query from autamatically running, we can use the **enambled = false** option.

- When **enabled** is **false**:
  - if the query has cached data ==> quert initilized **success**
  - If query does not cached statuess will be **idle**
  - **refetch** can be used manually trigger

```tsx
const { isIdle, isLoading, isError, data, error, refetch, isFetching } =
  useQuery("todos", fetchTodoList, {
    enabled: false,
  });

return <Button onClick={() => refetch()}>Fetch </Button>;
```
