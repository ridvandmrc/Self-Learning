import React from "react";

export const MemoSample = ({ list }: { list: number[] }) => {
  console.log("memo sample");
  return (
    <div>
      memo sample
      <select>
        {list.map((item, index) => (
          <option key={index}>item {item}</option>
        ))}
      </select>
    </div>
  );
};
