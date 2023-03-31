import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(); // 초기값을 설정하면 화면에서 값 수정 안됨
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };

  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const onClickAdd = () => {
    // 빈 입력값 예외 처리
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요!");
      return;
    }

    // 숫자가 아닌 입력이 들어왔을 때 예외 처리
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요!");
      return;
    }

    setResult(parseInt(num1) + parseInt(num2));
  };

  const onClickSub = () => {
    // 빈 입력값 예외 처리
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요!");
      return;
    }

    // 숫자가 아닌 입력이 들어왔을 때 예외 처리
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요!");
      return;
    }

    setResult(parseInt(num1) - parseInt(num2));
  };

  const onClickMul = () => {
    // 빈 입력값 예외 처리
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요!");
      return;
    }

    // 숫자가 아닌 입력이 들어왔을 때 예외 처리
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요!");
      return;
    }

    setResult(parseInt(num1) * parseInt(num2));
  };

  const onClickDiv = () => {
    // 빈 입력값 예외 처리
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요!");
      return;
    }

    // 숫자가 아닌 입력이 들어왔을 때 예외 처리
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요!");
      return;
    }

    setResult(parseInt(parseInt(num1) / parseInt(num2)));
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">계산기</h1>
      <div className="text-3xl font-black mb-4 ">{result}</div>
      <div className="mb-4 ">
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
          onClick={onClickAdd}
        >
          +
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
          onClick={onClickSub}
        >
          -
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4"
          onClick={onClickMul}
        >
          *
        </button>
        <button
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4"
          onClick={onClickDiv}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
