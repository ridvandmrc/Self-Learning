## Client-Side data fetching

- Client Side Rendering is useful when we don't need to have SEO indexing,
- if we don't use SEO, instead of **Server Side Rendering**, we can use client side data fetching
- We don't forget that, Client Side Rendering can have performance problem because data fetching done when component mount.

### Client-Side Data Fetching with useEffect

- Fallowing example show us that how to fetch data from client side

```tsx
import { useState, useEffect } from "react";

function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/profile-data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
```

### Client Side Fetching with SWR

- React Team introduced **SWR highly recommended**
- it handles caching, revalidation, focusing and re-fetching on interval

Same Example with **SWR**

```tsx
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR("/api/profile-data", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
```
