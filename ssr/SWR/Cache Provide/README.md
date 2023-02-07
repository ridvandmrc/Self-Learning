## Cache

- By default, SWR uses a global cache to store and share data across all components.
- But we can also customize this behavior with the **provider** option of **SWRConfig**

### Cache Provider

- A cache provider is Map-like object which matches the following TypeScriot definition

### Create Cache Provider

- The **Provider** option of **SWRConfig** receives a function that returns a **cache provider**.

```tsx
import useSWR, { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Page />
    </SWRConfig>
  );
}
```
