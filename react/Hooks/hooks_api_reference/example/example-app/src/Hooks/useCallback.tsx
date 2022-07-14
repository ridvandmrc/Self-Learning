import React, {  useEffect, useState } from "react";

export const CallbackSample = ({ getItem }: { getItem: any }) => {
  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    console.log("re-render getItems");
    setList(getItem());
  }, [getItem]);
  return (
    <div>
      {list.map((item, index) => (
        <li key={index}>Callback - {item}</li>
      ))}
    </div>
  );
};
