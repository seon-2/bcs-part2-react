import { useEffect, useState } from "react";

const GameBoard = () => {
  // Math.floor는 소수점을 없앰(내림)
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  // 랜덤 숫자를 추적
  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다.`);
  }, [randomNum]);

  // 사용자 입력 숫자 추적
  useEffect(() => {
    //  setChoiceNum(choiceNum+1); // 무한 반복. choiceNum을 추적하는데, choiceNum이 1 커지고, 근데 변하니까 다시 추적하고 무한 반복
    console.log(`사용자 입력 숫자는 ${choiceNum}입니다.`);
  }, [choiceNum]);

  // grow는 부모가 flex여야 함.
  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
          value={choiceNum}
          onChange={onChangeChoice}
        />
        <button className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg">
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
