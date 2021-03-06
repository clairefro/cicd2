import React, { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return <button onClick={increment}>Clicks: {count}</button>;
}

export default Counter;
