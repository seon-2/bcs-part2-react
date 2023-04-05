import { useEffect, useState } from "react";

const GameBoard = () => {
  // Math.floor는 소수점을 없앰(내림)
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  // 랜덤 숫자와 사용자가 선택한 숫자 비교
  const onClickCheck = () => {
    let checkNum = parseInt(choiceNum);

    // 예외 처리 - 문자입력
    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요!");
      return;
    }

    // 예외 처리 - 0~100 이외의 숫자
    if (0 > checkNum || checkNum >= 100) {
      setHint("숫자를 잘못 입력하셨습니다!");
      return;
    }

    // 랜덤 숫자와 유저가 선택한 숫자 비교

    // 숫자 비교
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
        <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
