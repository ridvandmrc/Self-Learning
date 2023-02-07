## SWR

- The name "SWR" is derived from **stale-while-revalidate**,
- SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

```
with SWR, components will get a stream of data updates constantly and automatically.
And the UI will be always fast and reactive
```

### Overview

- Let's look at the example

```tsx
import useSWR from "swr";

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

- In this example, the **useSWR** hooks accepts a **key** string and a **fetcher** function.
- **Key** is aunique identifier of the data (normally the API URL) and will be passed to **fatcher**.
- **fetcher** can be any asynchronous function which returns the data
- we can use the native fetch or tools like Axios.
- The hook return 2 values: **data** and **error** based on the status of the request.

## Features

- With just one single line of code, we can simplfy the logic of data fetching in our project

- **fast**, **lightweight** and **reusable** data fetching
- built-in **cache** and request deduplication
- **Real-time** exprience
- SSR/ISR/SSG support

* **SWR** has covered in all aspects of speed, corretness, and stability to help us build better experiences:

- Fast page navigation
- Polling on interval
- Data dependency
- Revalidation on focus
- Revalidation on network recovery
- Local Mutation (Optimistic UI)
- Pagination

## Getting Started

### Quick Start

- For normal RESTful APIs with JSON data, we need to create a **fetcher** function.

```tsx
const fetcher = (...args) => fetch(...args).then((res) => res.json());
```

- now we can import **useSWR** and start using it inside any function components:

```tsx
import useSWR from "swr";
function Profile() {
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading ...</div>;

  return <div>Hello {data.name}!</div>;
}
```

### Make It Reusable

- when building a web app, we might need to reuse the data in many places of the UI. It is incredibly easy to create reusable data hooks on top of SWR:

```tsx
function useUser(id) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

// we can use it in other component
function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return <img src={user.avatar} />;
}
```
