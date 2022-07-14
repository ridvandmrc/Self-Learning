import React, { useContext } from "react";

import { name } from "../Utils";

export const Context = () => {
  const currentName = useContext(name);

  return <div>Current Name: {currentName}</div>;
};
