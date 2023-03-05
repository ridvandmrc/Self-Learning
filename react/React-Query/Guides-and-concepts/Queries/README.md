## Queries

### Query Basics

- A query is a declarative dependency on an asynchronous source of data that is tied to a **unique key**.

* A query can be used with any Promise based based method (include GET and POST methods) to fetch data from a server.
* If the method modifes data on the server, **Mutations** recommended

- In order to subcribe to a query in our components or custom hooks, we can call **useQuery**

  - A **unique** key for the query
  - resolve data, or throws an error

```tsx
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos", fetchTodoList);
}
```

- The **Unique key** we provide is used internally for refetching, and sharing our queries throughout our application.
- The query results returned by **useQuery** contains all of the information about the query that we will need for.

```tsx
const result = useQuery("todos", fetchTodoList);
```

- The **result** object contains a few very important states, we will need to be awera of to be productive.
- A query can only be in one of the following states at any given moment:
  - **isLoading** or **status === 'loading'** - The query has no data and is currently fetching
  - **isError** or **status === 'error'** - The query encountered an error
  - **isSuccess** or **status === 'success'** - The query was successful and data is available
  - **isIdle** or **status === 'idle'** - The query is currently disabled

* Beyond those primary states, more information is available depending on the state of query

  - **error** - if query is in an **isError** state, the error is available via the **error** property.
  - **data** - if query is ina **success** state, the data is available via the **data** property.
  - **isFetching** - In any state, if the query is fetching at any time (including background refetching), **isFetching** will be true

For **most** queries, it's usually sufficient to check for the **isLoading** state, then the **isError** state,then finally, assume that the data is available and render the successful state:

```tsx
function Todos() {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## Query Keys

- It's core, React Query manages query caching for we based on query keys.
- Query keys can be as simple as a string, or as complex as an array of many strings and nested objects.
- Query is serializable, and **unique to the query's data**

### String-Only Query Keys

- The simplest form of a key is actually not an array, but an individual string.
- When a string query key is passed, it is converted to an array internally

```tsx
// A list of todos
 useQuery('todos', ...) // queryKey === ['todos']

 // Something else, whatever!
 useQuery('somethingSpecial', ...) // queryKey === ['somethingSpecial']
```

### Array Keys

- When a query needs more information to uniquely describe its data,
- We can use an array with a string and any number of serializable objects to describe it . This is useful for:
  - Hierarchical or nested resources
    - It's common to pass an ID, index or other primitive ...
  - Queries with additional parameters
    - It's common to pass an object of addtional options

```tsx
// An individual todo
 useQuery(['todo', 5], ...)
 // queryKey === ['todo', 5]

 // An individual todo in a "preview" format
 useQuery(['todo', 5, { preview: true }], ...)
 // queryKey === ['todo', 5, { preview: true }]

 // A list of todos that are "done"
 useQuery(['todos', { type: 'done' }], ...)
 // queryKey === ['todos', { type: 'done' }]
```

### Query Keys are hashed deterministically!

- This means that no matter the order of keys in objects, all of the following queries are considered equal:

```tsx
 useQuery(['todos', { status, page }], ...)
 useQuery(['todos', { page, status }], ...)
 useQuery(['todos', { page, status, other: undefined }], ...)
```

- The following query keys, however, are not **equal**. Array item oreder matters!

```tsx
 useQuery(['todos', status, page], ...)
 useQuery(['todos', page, status], ...)
 useQuery(['todos', undefined, page, status], ...)
```

### If our query function depends on a variable, include it in our query key

- If our key depends on any variable we should add it in query as variable

```tsx
function Todos({ todoId }) {
  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
}
```

### ============> Summary

- useQuery(key,fetcher) ==> **key** should be uniqueu
- useQuery() returns some props like data,error,status
- we can build our application by using this props
  ### Query Keys
- keys should be string, array, object or any seriazable thing
- for array keys we can pass more data, to make it more uniqueu
- Query is **hashing** so that we should careful for object keys
  - these are default
  ```tsx
  // These keys are equal
  useQuery(['todos', { status, page }], ...)
  useQuery(['todos', { page, status }], ...)
  useQuery(['todos', { page, status, other: undefined }], ...)
  ```
- in the array we can use same things with different order

```tsx
useQuery(['todos', status, page], ...)
 useQuery(['todos', page, status], ...)
 useQuery(['todos', undefined, page, status], ...)

```

- We can also use variable in **useQuery**

```tsx
function Todos({ todoId }) {
  const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
}
```
