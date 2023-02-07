### Suspense

- we can enable the **suspense** option to use SWR with React Suspense:

```tsx
import { Suspense } from "react";
import useSWR from "swr";

function Profile() {
  const { data } = useSWR("/api/user", fetcher, { suspense: true });
  return <div>hello, {data.name}</div>;
}

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Profile />
    </Suspense>
  );
}
```
