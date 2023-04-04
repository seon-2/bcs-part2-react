import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {/* && 연산자는 양쪽이 모두 참일 때 참. 컴포넌트는 항상 참이기 때문에, toggle이 참일 때만 컴포넌트가 보여짐*/}
      {/* jsx이기 때문에, 논리 연산자 &&로 If 조건문을 인라인으로 표현 */}
      {toggle && <Counter />}
      {/* {toggle ? <Counter /> : "카운터"} */}
      {/* 삼항연산자 사용해서 toggle이 true일 때 Counter 컴포넌트, false일 때 "카운터" 이렇게도 많이 쓰임 */}
      <button
        onClick={onClickToggle}
        className="bg-pink-300 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        버튼
      </button>
    </div>
  );
}

export default App;
