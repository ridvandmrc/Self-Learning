### Placeholder Query Data

- Placeholder data allows a query to behave as if it already has data, similar to the **initialData** option,
- but **the data is not persisted to the cache**.
- **placeholderData** populate data to cache if empty

```tsx
function Todos() {
  const result = useQuery("todos", () => fetch("/todos"), {
    placeholderData: placeholderTodos,
  });
}
```

### Placeholder Data as a Function

- we can alsı use populare data with **useMemo**

```tsx
function Todos() {
  const placeholderData = useMemo(() => generateFakeTodos(), []);
  const result = useQuery("todos", () => fetch("/todos"), { placeholderData });
}
```

- If cache is not empty data is coming from Backend cache

```tsx
function Todo({ blogPostId }) {
  const result = useQuery(
    ["blogPost", blogPostId],
    () => fetch(`/blogPosts/${blogPostId}`),
    {
      placeholderData: () => {
        // Use the smaller/preview version of the blogPost from the 'blogPosts' query as the placeholder data for this blogPost query
        return queryClient
          .getQueryData("blogPosts")
          ?.find((d) => d.id === blogPostId);
      },
    }
  );
}
```

### Initial Query Data

- There are many ways to supply initial data for a query to the cache before we need it:
- Provide **initialData** to a query to populate its cache if empty

### Using **initialData** to prepopulare a query

- If we want to skip initial loading, we can use **config.initialData**

```
IMPORTANT:  initialData is persisted to the cache, so it is not recommended to provide placeholder,
```

### **StaleTime** and **initialDataUpdatedAt**

- **initialData** is treated as totally fresh, as if it were just fetched.
- This also means that it will affect how it is interpreted by the **staleTime** option
- **staleTime** is 0 default, the query will immediately refetch when it mounts:

```tsx
function Todos() {
  // Will show initialTodos immediately, but also immediately refetch todos after mount
  const result = useQuery("todos", () => fetch("/todos"), {
    initialData: initialTodos,
  });

  function Todos() {
    // Show initialTodos immediately, but won't refetch until another interaction event is encountered after 1000 ms
    const result = useQuery("todos", () => fetch("/todos"), {
      initialData: initialTodos,
      staleTime: 1000,
    });
  }
}
```

### "QueryClient"

### Prefetching

- If we know about user data, we can use **prefetchQuery**

```tsx
const prefetchTodos = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery("todos", fetchTodos);
};
```

### Manually Priming a Query

- Alternatively, We already know the data for our query, we don't need to prefetch it.
- We can just use the **Query Client's setQueryData** method to directly add or update a query's cached result by key.

```tsx
queryClient.setQueryData("todos", todos);
```

### =======> Sumamary

- **Placeholder**: Rendered data if cache is empty, replaced immediately once data is arrived
- **Initial Data**: Rendered firs request data, we can use it if we already know the first data. it is not replaced again
- **Prefetching**: If we already know user data, we are lucky we can use this information and we can cache it in advance
- **setQueryData**: If the data is already available we can use this data as well, to do this let's use

```tsx
queryClient.setQueryData("todos", todos);
```
