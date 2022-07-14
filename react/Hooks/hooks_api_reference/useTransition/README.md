### useTransition

```tsx
const [isPending, startTransition] = useTransition();
```

* Returns a stateful value for the pending state of the transition, and a function to start it.
* **startTransition** let us mark updates in the provided callback as transitions:
```tsx
startTransition(()=> {
    setCount(count + 1)
})
```

* **isPending** indicates when a transition is active to show a pending state:

### Example 

```tsx
// App.tsx
import { useTransition, useState } from 'react';

export default App = () => {
    const [isPending, startTransition] = useTransition();
    const [count,setCount] = useState(0);

    function handleClick = () => {
        startTransition(()=>{
            setCount(c => c + 1)
    })
    }

    return 
    <div>
        {isPending && <Spinner />}
        <button onClick={handleClick}> {count} </button>
    </div>
}
```

### ========> Summary
* useTransition for pending issue maybe (Loader)
* startTransition takes a **callback function** and trigger **pending** state


