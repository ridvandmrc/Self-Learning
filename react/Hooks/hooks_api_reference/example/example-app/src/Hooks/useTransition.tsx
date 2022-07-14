import React, { useState, useTransition } from "react";

export const Transition = () => {
  const [count, setCount] = useState(1);
  const [isPending, startTransition] = useTransition();

  const getData = async () => {
    startTransition(() => {
      console.log("loo");
      setCount(() => count + 1);
      for (let i = 0; i < 1e9; i++) {}
    });
  };

  /*  useEffect(() => {
    getData();
  }, []); */

  console.log(isPending);
  return (
    <div>
      {!isPending ? (
        <button onClick={() => getData()}>{count}</button>
      ) : (
        "pending"
      )}
    </div>
  );
};
