### REDUX TOOLKIT
* Purpose of this package to create a standard way to **Redux** logic.
* Some concern for Redux:
    * "Configuring a Redux Store is too Complicated"
    * A lot of packages is needed to add
    * Redux requires too much boilerplate code

* These tools should be beneficial to all Redux users.
* Redux toolkit can help you make your Redux code better.

### What's Included
Redux toolkit includes these APIs:

* **ConfigureStore()**: We can use this instead of **createStore()** to provide simplified configuration options and good defaults.
* **createReducer()**: We can use this this function instead of defining **switch case** statement
* **createAction()**: generates an action create function for the given action type string.
* **createString()**: accepts an object of reducer functions, a slice name and a initial state value and automatically generates a slider reducer with corresponding action creators and action types.


### Usage
* Create a Redux Store:
    * we will use **configureStore** to create a store.

```ts
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
})

```
* Provide the Redux store to whole application.
    * Once the store is created, we can make it available to our React components by putting a **React-Redux<Provider>** around our application in 'src/index'.

```tsx
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ...
)
```

*  Create a Redux State Slice
    * Import the 'createSlice' API from Redux Toolkit.
    * Creating a slice requires a string name to identify the slice,  an  initial state value, **an one or more reducer functions to define how state can be updated**.
    * Once a slice is created, we can export the generated Redux action creators and the reducer function for whole slice.

```tsx
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

* Add Slice Reducer to the store:
    * Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the **reducer** parameter,
    * We tell the store to use this slice reducer function to handle all updates to that state.

```tsx
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlice';

export const store = configure ({
    reducer: {
        counter: counterReducer,
    },
})
```

* Use Redux state and Actions in React Components
    * Now,  we can use the React-redux hooks to let component interact with Redux store.
    * We can read date from store with **useSelector**, and dispatch actions using **useDispatch**. 

```tsx
import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

return (
    <div onClick={()=> dispatch(increment())}>{count}<div>
)

}
```

### =============> Summary
* We can create store with **configureStore**.
    * Accepts **reducer**, function name should be given.
* Provide the Redux store to react application components
    * Put a React-Redux **provider** component around our **<App />
    * Pass the Redux store as **<Provider store={store} />**
* We should crate a "slice" with **createSlice**
    * call **createSlice** with a string name, an initial state and named reducer functions
    * ... 
* Use the React-redux **useSelector/useDispatch** hooks in React components
    * Read data from the store with the **useSelector** hook
    * Get the **dispatch** function with the **useDispatch** hook
    