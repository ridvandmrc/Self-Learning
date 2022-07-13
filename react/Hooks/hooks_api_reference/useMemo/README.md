### UseMemo
```ts
const memoizedValue = useMemo(() =>computeExpensiveValue(a, b), [a, b]);
```

* Recompute the memoized value when one of dependencies has changed.
* This optimization helps to avoid expensive calculations on every render.

### Example     

```tsx
// App.tsx
import { useMemo } from 'react';

export default App = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() =>{ 
        return slowFunction()  // this function takes 2 seconds
     },[number]);
   
   ...
}
```


### =======> Summary
* use **useMemo** if you can see performance problem
* it **reRender** to component if dependency list **updated**
* return memorized values