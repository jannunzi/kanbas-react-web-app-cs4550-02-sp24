import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";

function Labs() {
  return (
    <>
      <h1>Labs</h1>
      <Assignment3 />
      <Assignment4 />
      <Assignment5 />
    </>
  );
}

export function Add(a: number, b: number) {
  return a + b;
}

export function Subtract(a: number, b: number) {
  return a - b;
}

export default Labs;
