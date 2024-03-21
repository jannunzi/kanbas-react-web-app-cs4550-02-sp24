import React, { useState } from "react";
function Counter({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  //   let count = 7;
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;
