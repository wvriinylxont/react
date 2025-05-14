import React, { useState } from "react";

function App09() {
  const [count, setCount] = useState(0);
  console.log("==========");
  const inc = () => setCount(count + 1);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App09;
