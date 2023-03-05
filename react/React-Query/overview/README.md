## Overview

- React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes **fetching, caching, synchronizing and updating server state** in our React applications.

### Motivation

- React is not coming with fetching library. When you want to do backend call you have to think these:

* Caching... (possibly hardest thing to do in programming)
* Deduping multiple requests for the same data into a single request
* Updateing "out of date" data in the background
* Knowing when data is "out of date"
* Reflecting updates to data as quickly as possible
* Performance optimizations
* Managing memory and garbage collection

### Let's do it !!!

```tsx
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
```
