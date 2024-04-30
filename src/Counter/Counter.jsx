import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("cyan");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    setColor("red");
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counterMain font-bold">
        <div className="shadow-lg p-4 m-4 my-8 rounded-lg flex justify-center p-8">
          <button
            className={
              count <= 0
                ? "bg-cyan-600 opacity-50 p-2 py-1 text-white border rounded-lg m-4"
                : "bg-cyan-600 p-2 py-1 text-white border rounded-lg m-4"
            }
            onClick={decrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <h1 className=" p-2 py-1 border rounded-lg m-4">{count}</h1>
          <button
            className="bg-cyan-600 p-2 py-1 text-white border rounded-lg m-4"
            onClick={increment}
          >
            Increment
          </button>
          <div>
            <button
              className="bg-cyan-600 p-2 py-1 text-white border rounded-lg m-4"
              onClick={reset}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
