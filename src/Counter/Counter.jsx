import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [colorDec, setColorDec] = useState("");
  const [colorInc, setColorInc] = useState("");
  const [colorReset, setColorReset] = useState("");

  const increment = () => {
    setCount(count + 1);
    setColorInc("green");
    setColorDec("");
    setColorReset("");
  };

  const decrement = () => {
    setCount(count - 1);
    setColorInc("");
    setColorDec("red");
    setColorReset("");
  };

  const reset = () => {
    setCount(0);
    setColorInc("");
    setColorDec("");
    setColorReset("black");
  };

  return (
    <>
      <div className="counterMain font-bold">
        <div className="shadow-lg p-2 sm:p-8 m-4 my-8 rounded-lg flex justify-center">
          <button
            className={
              count <= 0
                ? "bg-cyan-600 opacity-50 p-2 py-1 text-white border rounded-lg m-2 sm:m-4"
                : "bg-cyan-600 p-2 py-1 text-white border rounded-lg m-2 sm:m-4"
            }
            style={{ backgroundColor: colorDec }}
            onClick={decrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <h1 className=" p-2 py-1 border rounded-lg m-2 sm:m-4">{count}</h1>
          <button
            className="bg-cyan-600 p-2 py-1 text-white border rounded-lg m-2 sm:m-4"
            style={{ backgroundColor: colorInc }}
            onClick={increment}
          >
            Increment
          </button>
          <div>
            <button
              className="bg-cyan-600 p-2 py-1 text-white border rounded-lg m-2 sm:m-4"
              onClick={reset}
              style={{ backgroundColor: colorReset }}
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
