import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubtract = () => {
    // 이전 값을 가져와서 사용
    /* 여러 줄 주석
    setCount((prev) => {
      return prev - 1;
    });
    */

    if (count <= 0) {
      alert("count의 값이 0보다 작을 수 없습니다!");
      return;
    }

    setCount(count - 1);
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
      <button
        className="bg-red-300 w-12 h-12 rounded-md mt-4"
        onClick={onClickSubtract}
      >
        -
      </button>
    </div>
  );
}

export default App;
