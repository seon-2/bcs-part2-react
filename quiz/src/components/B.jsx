// useState, button-onClick을 사용하여 +를 누르면 1증가, -를 누르면 1감소하는 Counter

import { useState } from "react";

function B() {
  const [count, setCount] = useState(0);

  const handleButtonPlus = () => {
    setCount(count + 1);
  };

  const handleButtonMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-red-100 h-screen flex justify-center items-center">
      <button className="btn-style" onClick={handleButtonMinus}>
        -
      </button>
      <div className="text-main mx-4 text-bold text-4xl">{count}</div>
      <button className="btn-style" onClick={handleButtonPlus}>
        +
      </button>
    </div>
  );
}

export default B;
