### Performance

- SWR provides critical functioality in all kinds of web apps, so **performance** is a top priorty.
- SWR's built-in **caching** and **deduplication** skips unnecessary network requests,
- but the performance of the **useSWR** hook itself still matters.

### Deduplication

- It's very common to reuse SWR hooks in our app.
- For example:

```tsx
function useUser() {
  return useSWR("/api/user", fetcher);
}

function Avatar() {
  const { data, error } = useUser();

  if (error) return <Error />;
  if (!data) return <Spinner />;

  return <img src={data.avatar_url} />;
}

function App() {
  return (
    <>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </>
  );
}
```
