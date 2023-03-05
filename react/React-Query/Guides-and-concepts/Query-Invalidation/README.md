## Query Invalidation

- Waiting for queries to become stale before they are fetched again doesn't always work, especially whe we know for a fect that a query's data is out of date becouse of something the user has done.
- For that purpuse, the **QueryClient** has an **invalidateQueries** method that lets you intellgently mark queries as stale and potentially refetch them too!

```tsx
// Invalidate every query in the cache
queryClient.invalidateQueries();
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries("todos");
```

### Query Matching with **invalidateQueries**

- When using APIs like **invalidateQueries** and **removeQueries**,
- we can match multiple queries by their prefix.
- or we can get really specific **exact** match

```tsx
import { useQuery, useQueryClient } from "react-query";

// Get QueryClient from the context
const queryClient = useQueryClient();

queryClient.invalidateQueries("todos");

// Both queries below will be invalidated
const todoListQuery = useQuery("todos", fetchTodoList);
const todoListQuery = useQuery(["todos", { page: 1 }], fetchTodoList);
```

- The **invalidateQueries** API is very flexible, so event if we want to **only** invalidate **todos** queries that don't have any more variables or subkeys, we can pass an **exact:true**

```tsx
queryClient.invalidateQueries("todos", { exact: true });

// The query below will be invalidated
const todoListQuery = useQuery(["todos"], fetchTodoList);

// However, the following query below will NOT be invalidated
const todoListQuery = useQuery(["todos", { type: "done" }], fetchTodoList);
```

### Invalidate from Mutations

- Invalidationg query is only half the battle.
- Knowing **when** to invalidate them is the one other half.
- Usually when a mutation in our app **succeeds**

```tsx
import { useMutation, useQueryClient } from "react-query";

const queryClient = useQueryClient();

// When this mutation succeeds, invalidate any queries with the `todos` or `reminders` query key
const mutation = useMutation(addTodo, {
  onSuccess: () => {
    queryClient.invalidateQueries("todos");
    queryClient.invalidateQueries("reminders");
  },
});
```

### Updates from Mutation Responses

- When dealing with mutations taht **update** objects on the server, it's common for the new object to be autamatically returned response of the mutation.
- instead of refetching any queries for that item and wasting network call for data we already have.
- we can use manually cached by **QuertClient setQueryData**

```tsx
const queryClient = useQueryClient();

const mutation = useMutation(editTodo, {
  onSuccess: (data) => {
    queryClient.setQueryData(["todo", { id: 5 }], data);
  },
});

mutation.mutate({
  id: 5,
  name: "Do the laundry",
});

// The query below will be updated with the response from the
// successful mutation
const { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoById);
```

### Optimistic Updates

- When we update **optimistically** update our stale before performing mutation, there is a chace that the mutation will fail.

- In most of these failure cases, we can just trigger a refetch our optimistic queries to revert them to their true server state.

- To do this, **useMutation**'s **onMutate** handler option allows us to return a value tat will later be passed to both **onError** and **onSettled**
- It is the most useful to pass a rollback function

```tsx
const queryClient = useQueryClient();

useMutation(updateTodo, {
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries("todos");

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData("todos");

    // Optimistically update to the new value
    queryClient.setQueryData("todos", (old) => [...old, newTodo]);

    // Return a context object with the snapshotted value
    return { previousTodos };
  },
  // If the mutation fails, use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData("todos", context.previousTodos);
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries("todos");
  },
});
```

### Context

- If we want to pass data from mutate to **error, success or settled**, we should return context value from **onMutate**s

## =========> Summary

- Sometimes we want to validate query explicitly so that we can use **queryInvalidation**
- Important point is that we should match keys and also we can use **exact** keyword
- If we already know optimistic data we can set the cache by **queryClient.setQuery()**
- then if mutation is successfull, we can use **onSettled**
- then if data get error we can use **onError** callback
