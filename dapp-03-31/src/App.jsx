import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("문제점"); // 초기값을 설정하면 화면에서 값 수정 안됨
  const [result, setResult] = useState(0);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">계산기</h1>
      <div className="text-3xl font-black mb-4 ">{result}</div>
      <div className="mb-4 ">
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num1}
        />
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
        />
      </div>
      <div>
        <button className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500">
          +
        </button>
        <button className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4">
          -
        </button>
        <button className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4">
          *
        </button>
        <button className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4">
          /
        </button>
      </div>
    </div>
  );
}

export default App;
