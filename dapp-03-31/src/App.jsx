import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {/* html 영역에서 js 변수 사용하려면 {} 사용! */}
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-md"
        onClick={onClickAdd}
      >
        +
      </button>
    </div>
  );
}

export default App;
