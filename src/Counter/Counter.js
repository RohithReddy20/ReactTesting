import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div className="Counter">
      <h1 data-testid="header">My Counter</h1>
      <h2
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
        data-testid="counter"
      >
        {counterValue}
      </h2>
      <button
        onClick={() => {
          setCounterValue(counterValue - inputValue);
        }}
        data-testid="sub-btn"
      >
        -
      </button>
      <input
        className="text-center"
        data-testid="inputC"
        value={inputValue}
        type="number"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setCounterValue(counterValue + inputValue);
        }}
        data-testid="add-btn"
      >
        +
      </button>
    </div>
  );
}
