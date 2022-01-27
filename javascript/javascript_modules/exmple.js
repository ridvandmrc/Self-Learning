// avoiding naming conflicts

// we can avoid conflict when export

const func1 = () => console.log("func1");
const func2 = () => console.log("func2");

// we can export this with alias
export { func1 as myFunc1, func2 as myFunc2 };

// we can avoid conflict when import

// import { func1 as myFunc1, func2 as myFunc2 } from "../";
