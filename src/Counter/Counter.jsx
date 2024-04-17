import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counterMain">
        <div className="counterinner">
          <button
            className="subtract"
            onClick={decrement}
            disabled={count <= 0}
          >
            subtract
          </button>
          {count}
          <button className="add" onClick={increment}>
            add
          </button>
          <div>
            <button onClick={reset}>reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
