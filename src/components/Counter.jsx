import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-80">
      <h1>Counter: {count}</h1>
      <div className="flex justify-between gap-2">
        <button
          className="w-full p-2 bg-blue-50"
          onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button
          className="w-full p-2 bg-blue-50"
          onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
