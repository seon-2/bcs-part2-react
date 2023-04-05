import { useState } from "react";

function FunctionalComp() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-100 w-1/2 min-h-screen flex flex-col justify-center items-center text-2xl">
      {count}
      <button
        className="bg-purple-300 px-4 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default FunctionalComp;
