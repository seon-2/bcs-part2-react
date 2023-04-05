import { useEffect, useState } from "react";

const GameBoard = () => {
  // Math.floor는 소수점을 없앰(내림)
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  // 랜덤 숫자를 추적
  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다.`);
  }, [randomNum]);

  // grow는 부모가 flex여야 함.
  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
        />
        <button className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg">
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
