/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useId, useMemo, useState } from "react";
import { CallbackSample } from "./Hooks/useCallback";
import { Context } from "./Hooks/useContext";
import { MemoSample } from "./Hooks/useMemo";
import { Transition } from "./Hooks/useTransition";
import { name } from "./Utils";

function App() {
  const [nameInput, setNameInput] = useState("test");
  const [list] = useState([1, 2, 3, 4]);

  const getList = useCallback(() => {
    // call this function when list updated
    return [...list, list[list.length - 1] + 1];
  }, [list]);

  console.log("unuqie Id: ", useId());

  return (
    <name.Provider value={nameInput}>
      <Context />
      <input />
      <button
        onClick={() => {
          setNameInput(document.querySelector("input")?.value as any);
          /* setList([...list, list[list.length - 1] + 1]); */
        }}
      >
        Set Input
      </button>
      {useMemo(
        // render this component when list updated
        () => (
          <MemoSample list={list} />
        ),
        [list]
      )}

      <CallbackSample getItem={getList} />
      <Transition />
    </name.Provider>
  );
}

export default App;
