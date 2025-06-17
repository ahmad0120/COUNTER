import React, { useState } from "react";

export default function CounterCard() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-96 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Counter</h1>
        <div className="text-6xl font-semibold text-blue-600">{count}</div>
        <div className="flex justify-center gap-6">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full text-lg transition-all"
          >
            −
          </button>
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full text-lg transition-all"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
