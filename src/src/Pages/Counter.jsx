import React from "react";

import { useCounter } from "../CustomHooks/useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{ flex: 1, backgroundColor: "#eccc", width: "100%", height: "100%"}}>
      <h3>Count: {count}</h3>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button style={{ backgroundColor: 'white', border:'none', borderRadius: "8px", padding: "8px" }}
        onClick={increment}>Increment</button>
        <button style={{ marginLeft: "5%", backgroundColor:'dodgerblue', border:'none', borderRadius: "8px", padding: "8px" }}
        onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
