### API

```tsx
const { data, error, isLoading, isValidating, mutate } = useSWR(
  key,
  fetcher,
  options
);
```

### Parameters

- **key**: A unique key string for the request
- **fetcher**: A Promise returning function to fetch data
- **options**: An object of options for this SWR hook

### Return Values

- **data**: Data for the given key resolved by **fetcher**
- **error**: Error thrown by **fetcher**
- **isLoading**: If there's an ongoing request and no "loaded data". Fallback data and previous data are not considered "loaded data".
- **isValidating**: if there's a request or revalidation loading
- **mjutate(data?,options?)**: function to mutate the cache data

### Options

- **suspense = false**: enable React Suspense mode
- **fetcher**: the fetcher function
- **revalidateIfStale = true**: automatically revalidate even if there is stale data
- **revalidateOnMounth**: enable or disable automatic revalidation when components is mounted
- **revalidateOnFocus=true**: Automatically revalidate when window gets focused
- **revalidateOnReconnect = true**: Automatically revalidate when the browser regains a notwork connection.
- **refreshInterval**
  - Disabled by default: **refreshInterval = 0**
  - If set to a numberi polling interval in milliseconds
- **refreshWhenHidden = false**: polling when the wiindow is invisible(if **refreshInterval** is enabled).
- **shouldRetryonError = true**: retry when fetcher has an error
- 
