### Global Configuration

- The context **SWRConfig** can provide global configuration for all SWR hooks.

```tsx
<SWRConfig value={options}>
  <Component />
</SWRConfig>
```

- We can use same fetcher for all provider.

```tsx
import useSWR, { SWRConfig } from "swr";

function Dashboard() {
  const { data: events } = useSWR("/api/events");
  const { data: projects } = useSWR("/api/projects");
  const { data: user } = useSWR("/api/user", { refreshInterval: 0 }); // override

  // ...
}

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Dashboard />
    </SWRConfig>
  );
}
```

### Extra APIs

### Cache Provider

- Besides all options, **SWRConfig** also accepts an optional **provider** function.

```tsx
<SWRConfig value={{ provider: () => new Map() }}>
  <Dashboard />
</SWRConfig>
```

### Access To Gloval Configurations

- We can use the **useSWRConfig** hook to get global configurations

```tsx
import { useSWRConfig } from "swr";

function Component() {
  const { refreshInterval, mutate, cache, ...restConfig } = useSWRConfig();

  // ...
}
```
