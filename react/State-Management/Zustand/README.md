# Zustand

- A small, fast and scalable state management solution using simplified **flux** principles
- It works based on Hooks and isn't boilerplatey or opinionated.
- It is so easy to use and adapted it quickly,
- there is no any **provider** to wrap our app.
- we can define our way
- Straight to point

## Let's Start

- Our store is hook!
- We can put anything (primitive or object)

```tsx
// we just create a store
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## Then bind our components, and that's it!

```tsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

# Why Zustand over redux?

- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't **wrap** our app in context providers
- Less boilerplate
- Renders components only on change

<hr />
## Selecting multiple state slices

- we can also fetch everrthing like:
- but component will update on **every state change**

```tsx
const state = useBearStore();
```

- Also, we can select multiple state slice
- It detects changes with strict-equality (old===new) by default,
- this is efficient for atomic state picks.

```tsx
// we can select multiple
const nuts = useBearStore((state) => state.nuts);
const honey = useBearStore((state) => state.honey);
```

- if we want to cunstruct a sing object with multiple stat-picks inside
- we can tell **zustand** that we want the object to be diffed **shallowly** by passsing **shallow** equality function.

```tsx
import { shallow } from "zustand/shallow";

// Object pick, re-renders the component when either state.nuts or state.honey change
const { nuts, honey } = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
);

// Array pick, re-renders the component when either state.nuts or state.honey change
const [nuts, honey] = useBearStore(
  (state) => [state.nuts, state.honey],
  shallow
);

// Mapped picks, re-renders the component when state.treats changes in order, count or keys
const treats = useBearStore((state) => Object.keys(state.treats), shallow);
```

<hr />

## Access store from outside of component

- Sometimes we need to access state in a non-reactive way,
- For these cases the resulting hook has utility functions attached to its prototype.

```tsx
const useDogStore = create(() => ({ paw: true, snout: true, fur: true }));

// Getting non-reactive fresh state
const paw = useDogStore.getState().paw;
// Listening to all changes, fires synchronously on every change
const unsub1 = useDogStore.subscribe(console.log);
// Updating state, will trigger listeners
useDogStore.setState({ paw: false });
// Unsubscribe listeners
unsub1();
```

### Persist middleware

- we can persist our store's data using any kind of storage.

```tsx
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
```
