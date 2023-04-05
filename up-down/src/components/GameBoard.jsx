import { useEffect, useState } from "react";

const GameBoard = () => {
  const [point, setPoint] = useState(5);
  // Math.floor는 소수점을 없앰(내림)
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  // 랜덤 숫자와 사용자가 선택한 숫자 비교
  const onClickCheck = (e) => {
    e.preventDefault();

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
    if (randomNum === checkNum) {
      setHint("정답입니다! 랜덤 값을 초기화 합니다.");

      // 맞추면 로컬스토리지에서 기존 점수 불러와서 -> 현재 점수 더하고 -> 저장
      if (point > 0) {
        let savedPoint = localStorage.getItem("point");
        localStorage.setItem("point", parseInt(savedPoint) + point);
      }
      
      // setPoint는 함수 실행되고 나서. 순서에 맞게 재배치 (위에 있어도 동작)
      setRandomNum(Math.floor(Math.random() * 100));
      setChoiceNum("");
      setPoint(5)
    }
    // 틀리면 점수 하락 
    else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
      setPoint(point - 1);
    } else if (randomNum < checkNum) {
      setHint("정답은 " + checkNum + "보다 낮은 숫자입니다.");
      setPoint(point - 1);
    }
    // set 함수는 point-- 가 작동하지 않음. setPoint((prev) => {prev--}); 로 써야 함
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

  // 현재 점수 추적
  useEffect(() => {
    console.log(`현재 점수는 ${point}입니다.`);
  }, [point]);

  // grow는 부모가 flex여야 함.
  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <form onSubmit={onClickCheck}>
          <input
            className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
            type="text"
            value={choiceNum}
            onChange={onChangeChoice}
          />
          {/* <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
        >
          확인
        </button> */}
          <input
            className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
            type="submit"
            value="확인"
          />
        </form>
      </div>
    </div>
  );
};

export default GameBoard;
