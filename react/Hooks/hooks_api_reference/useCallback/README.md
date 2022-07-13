### useCallback
```ts
const memoizedCallback = useCallback(
    () => {
        doSomething(a,b)
    },
    [a,b]
)
```
* Pass an inline callback and an array of dependencies.
* **useCallback** will return a memoized version of the callback that only changes if one of the dependencies has changed.
* It is useful if you are using object reference.

### Example

```tsx

export const App = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(()=>{ // If we didn't use useCallback, <List> component will render if any state(dark) changed
        return [number, number + 1, number +1]
    })
     ...

     return (
        <div>
            ...

        <List getItems={getItems}>
        </div>
     )

}

```

### ==========> Summary
* **useCallback** calls function if dependency changed
* it call **calback function**
* it is very similiar with **useMemo**
* generally use this if you have more than one state, and it has object reference