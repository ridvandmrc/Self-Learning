### Jotai

- Primitive and flexible state management for React
- **Jotai** scales from a simple **useState** replacement to an enterprise **TypeScript** application
- Minimal core API
- Many utilities and integrations
- No string keys (compared to **Recoil**)
- small bundle size

### Create a primitive atom

- An atom represents a piece of **state**.
- All we need is to specify an initial value which can be primitive values like **strings, numbers, objects and arrays**
- We can create as many primitive atoms as we want

```tsx
import { atom } from "jotai";

const countAtom = atom(0);
const countryAtom = atom("Japan");
const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
const mangaAtom = atom({
  "Dragon Ball": 1984,
  "One Piece": 1997,
  Naruto: 1999,
});
```

### Use the atom in our components

- It can be used like **React.useState**:

```tsx
import { useAtom } from 'jotai'

function Counter() {
  const [count, setCount] = useAtom(countAtom)
  return (
    <h1>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
      ...
```

### Create derived atoms with computed values

- A new read-only atom can be created from existing atoms by passing a read functions as the first argument.
- **get** allows we to fetch the contextual value of any atom.

```tsx
const doubledCountAtom = atom((get) => get(countAtom) * 2);

function DoubleCounter() {
  const [doubledCount] = useAtom(doubledCountAtom);
  return <h2>{doubledCount}</h2>;
}
```

### Creating an atom from multiple atoms

- We can combine multiple atoms to create a derived atom.

```tsx
onst count1 = atom(1)
const count2 = atom(2)
const count3 = atom(3)

const sum = atom((get) => get(count1) + get(count2) + get(count3))
```

## =========================> Summary

- It approaches the solution in **atom** base
- We can craete primitive atoms as we want

```tsx
import { atom } from "jotai";

const countAtom = atom(0);
const countryAtom = atom("Japan");
const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
const mangaAtom = atom({
  "Dragon Ball": 1984,
  "One Piece": 1997,
  Naruto: 1999,
});
```

- and also we can also use this atoms like **useState**

```tsx
import { useAtom } from 'jotai'

function Counter() {
  const [count, setCount] = useAtom(countAtom)
```

- also we can put a middleware here

```tsx
const doubledCountAtom = atom((get) => get(countAtom) * 2);

function DoubleCounter() {
  const [doubledCount] = useAtom(doubledCountAtom);
  return <h2>{doubledCount}</h2>;
}
```
