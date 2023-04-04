import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Counter 컴포넌트가 생성된 상태입니다.");

    if (count > 0) {
      console.log("Counter 업데이트 되었습니다.");
    }

    // 컴포넌트 교체될 때 (return () 안에 : clean up 함수)
    return () => {
      console.log("Counter 제거");
    };

    // 추적하고 싶은 값(count) : deps(dependencies; 의존성 배열)
    // Counter의 값이 업데이트 될 때마다 count의 값이 변하면서 
    // 콘솔에 제거, 생성, 업데이트 출력
  }, [count]);

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
