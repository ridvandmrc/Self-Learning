### useId
```tsx
const id = useId();
```
* **useId** is a hook for generating unique IDs that are stable across the server and client.


``
Note: useId is not for generating keys in a list. keys should be generated from your data.
``

### Example

```tsx
// App.tsx

export default App = () => {
    const id = useId();

    return (
        <>
            <label htmlFor={id}> ... </label>
            <input id={id} type="checkbox" name="react">
        </>
    )
}
```

### ========> Summary
* **useId** generate unique id 
* do not use it for key because key is only for data