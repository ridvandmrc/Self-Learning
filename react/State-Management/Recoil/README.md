### Recoil

- **Recoil** wants to improve semantics and behaviour.
- **Recoil** defines a directed graphbut also intrinsic and attached to our React tree.
- State changes flow from the roots of this graph (which called **atoms**) through pure functions (which called **selectors**)

  - We get a boilerplate-free API where shared state has the same simple **get/set** interface as React local state.
  - State can be replaced with derived data without modifying components that use it.
  - Derived data can move between being syncronous and asyncronous without modifying the components that use it.

### Core Concepts

    - Recoil lets us create a data-flow graph that flows atoms (shared state) through selectors (pure funcitions) and down into our React components.
    - Atoms are units of state that components can subscrive to.

### Atoms

    - Atoms are units of state. They're updatable and subscribable:
    - When an atom is updated, each subscribed component is re-renderd with the new value.
    - They can be created at runtime and Atoms can be used in place of React local component state.

```tsx
const fontSizeState = atom({ key: "fontSizeState", default: 14 });
```

- Atoms need a unique key, which is used for debugging, persistence and for certain advanced APIs that let us see a map of all atoms.
- To read and write an atom from a component, we use a hook called **useRecoilState**, like **useState**

```tsx
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button
      onClick={() => setFontSize((size) => size + 1)}
      style={{ fontSize }}
    >
      Click to Enlarge
    </button>
  );
}
```

### Selectors

- A **selector** is a pure function that accepts atoms or other selectors as input.
- When these upstream atoms or selectors are updated, the selector function will be re-evaluated.
- Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change.
- Selectors are used to calculate derived data that is based on state. This lets us avoid redundant state because a minimal set of state is stored in atoms.

- Selectors are defined using the **selector** function:

```tsx
const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});
```

- The **get** propery is the function that is to be computed. It can access the value of atoms and other selectors using the **get** argument passed to it.

- In this **fontSizeLabelState** example, the selector has one dependency: the **fontSizeState** atom. Conceptually, the **fontSizeLabelState** selector behaves like a pure function that takes a **fontSizeState** as input and returns a formentted font size label as output.

- Selectors can be read using **useRecoilValue()**, which takes an atom or selector as an argument and returns the corresponding, We will not use the **useRecoilState()** as the **fontSizeLabelState**

### Getting Started

- Components that use recoil state need **RecoilRoot** to appear somewhere in the parent tree.

```tsx
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```

### Atom

- An Atom represents a piece of **state**. Atoms can be read from and written to from any component.
- Components that read the value of an atom are implicitly **subscribed**.

```tsx
const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
```

- Components that need to read from and write to an atom should use **useRecoilState()**

```tsx
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
```

## Selector

- A **selector** represents a piece of **derived state**.
- Derived state is a **transformation** of state.
- We can think of derived state as output of passing state.

```tsx
const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
```

- We can use the **useRecoilValue()** hook to read the value of **charCountState**:

```tsx
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
```

### =====> Summary

- **Atoms** contain the source of truth for our application state.
- accept key and value
- then we can handle this atom by **useRecoilValue(atom)**
- **Selectors** represents a piece of derived state.
- we can use this like a middleware
- **selector** accept get method and accept an atoms or a selector