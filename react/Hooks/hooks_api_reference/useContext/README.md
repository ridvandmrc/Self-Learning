### useContext
```tsx
const context = useContext(myContext);
```
* Accept a context object (returned from **createContext**)
* and Returns to current context value.
* The context value is determined by **value** prop of nearest **<MyContext.Provider>** above the calling component in tree.

* When the nearest **<MyContext.Provider>** above the components updates, this Hook will trigger a rerender with the latest context **value** passed to that **MyContext** provider.

``
Note: Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.
``

``
Note: Don't forget that the argument to useContext must be the context object itself.
``
* **Correct**: useContext(MyContext)
* **Incorrect**: useContext(MyContext.Consumer)
* **Incorrect**: useContext(MyContext.Provider)

``
Note: useContext always use return value of crateContext
``
### Example
```tsx
// context ThemeContext.ts

export const themes = {
    light:{
        foreground:"#000000",
        background:"#eeeeee"
    },
    dark: {
        foreground:"#ffffff",
        background:"#222222"
    }
}

export const ThemeContext = React.createContext(themes.light); // Default value

// App.tsx
import { ThemeContext,themes } from 'ThemeContext.tsx'

export const App = () => {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

// Toolbar.tsx

import {useContext} from 'react';
import {ThemeContext} from './ThemeContext.ts';

export const Toolbar = () => {
const theme = useContext(ThemeContext)

return (
    <button style = {{background: theme.background,color:theme.foreground}}>
        I am styled by theme context
    </button>)
}
```

### ======>  Summary
* use **useContext** to manage state that pass different hierarchy
* **useContext** accept return object from **createContext**
* So, before use **useContext**, we should create object from **createContext**
* and also we should wrap all element by **MyContext.Provider**


### [For Real example](https://github.com/ridvandmrc/Self-Learning/blob/main/react/Hooks/hooks_api_reference/example/example-app/src/Hooks/useContext.tsx)