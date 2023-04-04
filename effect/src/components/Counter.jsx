import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-4xl">{count}</div>
      <button
        onClick={onClickAdd}
        className="bg-red-500 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
