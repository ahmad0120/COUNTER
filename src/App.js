import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
 return (
   <div className="bg-green-300 flex justify-center items-center h-screen flex-col">
  <h1 className="mb-4 text-2xl font-bold">Count: {count}</h1>
  <div className="flex space-x-4">
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-green-500 text-white rounded" >
      Increase
    </button>
    <button
      onClick={() => {
        if (count > 0) {
          setCount(count - 1);
        }
      }}
      className={`px-4 py-2 rounded text-white ${count > 0 ? 'bg-red-500' : 'bg-gray-400 cursor-not-allowed'}`}
      disabled={count === 0}
    >
      Decrease
    </button>
  </div>
</div>


  );
}

export default Counter;