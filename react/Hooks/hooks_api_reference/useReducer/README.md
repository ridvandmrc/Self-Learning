### useReducer
```tsx
const [state,dispatch] = useReducer(reducer,initialArg,init)
```

* An alternative to **useState**. Accepts a reducer of type **(state,action) => newState**,
* Returns the current state paired with a **dispatch** method.
* it is very similar with **Redux**
* **useReducer** also lets us optimize performance for components that trigger deep updates
* because **we can pass dispatch down instead of callback**.

### Example usage

```tsx
// reducerCounter.ts
export const reducerCounter = (state,action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count -1}
        default:
            throw new Error()
    }
}

// Counter.tsx
import {useReducer} from 'react'
import {reducerCounter} from 'reducerCounter.ts'

export const Counter = () => {
    const initialState = {count: 0};
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
        <>
        count: {state.count}
        <button onClick={()=> dispatch((type: 'decrement'))}> - </button>
        <button onClick={()=> dispatch((type: 'increment'))}> + </button>
        </>
    )
}

// Also we can pass a data to store

// reducer.tsx

export const reducer = (state,action) {
    switch(action.type){
        ...
    case 'reset':
        return {{count: action.payload}}

    }
}

const [state,dispatch] = useReducer(reducer,initialCount,init);

<button onClick={() => dispatch({type:'reset',payload:0})}>Reset </button>


```

### ========> Summary
* **useReducer** is alternative for **useState**
* Returns to current state from dispatch
* Very similar with redux
* we can pass data to reducer via use dispacth