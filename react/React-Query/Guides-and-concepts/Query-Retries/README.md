### Query Retries

- When a **useQuery** query fails (the query function throws an error)
- React query will automatically retry the query if request count reach maximum count (default **3**)
- Also, we can configure it
  - Setting **retry = false** will disable retries.
  - Setting **retry = 6** will retry failing requests 6 times.
  - Setting **retry = true** will infinitely failing request

### Retry Delay

- By defaulti retries in React Query do not happen immediately after request fails.
- default **1000ms** not exceep **30 seconds**

```tsx
// Configure for all queries
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

### Paginated/Lagged Queries

- Rendering paginated data is very common UI patern and React query , it "just works" by including the page informatin in the query key.

```tsx
const result = useQuery(["projects", page], fetchProjects);
```

- we should also keep previous data and we should check previous data

```tsx
function Todos() {
  const [page, setPage] = React.useState(0);

  const fetchProjects = (page = 0) =>
    fetch("/api/projects?page=" + page).then((res) => res.json());

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["projects", page], () => fetchProjects(page), {
      keepPreviousData: true,
    });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData && data.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
```

### Keep previous data is important

### Infinite Queries

- Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very
  common UI pattern.
- React Query supports a useful version of **useQuery** called **useInfiniteQuery** for querying these types of lists.

- When using **useInfiniteQuery**, we willl notice a few things are different:
  - **data**: is now an object containing infinite query data:
  - **data.pages** array containing the fetched pages
  - **data.pageParams** containing the page params used to fetch the pages.
  - **fetchNextPage** and **fetchPreviousPage** function are now available
  - The **getNextPageParam** and **getPreviousPageParam** options are available for both determining if there is more data to load and the information to fetch it.
  - A **hasNextPage** boolean is now available and is **true** if **getPageParam** returns a value other than **undefined**

```tsx
import { useInfiniteQuery } from "react-query";

function Projects() {
  const fetchProjects = ({ pageParam = 0 }) =>
    fetch("/api/projects?cursor=" + pageParam);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("projects", fetchProjects, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
```
