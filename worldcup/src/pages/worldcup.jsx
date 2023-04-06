import { useState } from "react";
import { useEffect } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);

  // 선택 함수
  // 이차 함수 (v) => 화살표함수에 값 전달
  const onClickChoice = (v) => () => {
    // 배열 안에 추가. 기존 동물 + 새로 선택한 동물. push 대신 스프레드(얕은복사) 사용
    setNextRound([...nextRound, v]);
    // 다음 동물 2마리 띄워주기
    setChoice(choice + 2);
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      // 함수 안 넣으면(또는 양수) : 아스키코드 기준 가나다 정렬, 음수 : 역순으로 출력
      // -0.5~0.5 사이 숫자, 랜덤하게 정렬
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []);
  useEffect(() => console.log(nextRound), [nextRound]);
  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {/* 에러 발생 Cannot read properties of undefined (reading '7') */}
      {/* 사이드 이펙트 */}
      {/* 렌더링 되는 시점에서 useEffect는 아직 실행 안됨. 데이터가 없음. useState 기준으로 초기값 필요
      useEffect는 사이드에서 결과값만 넘겨줌 */}
      {shuffleAnimal && (
        <>
          <AnimalCard
            animal={shuffleAnimal[choice]}
            choice={choice}
            onClickChoice={onClickChoice}
          />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard
            animal={shuffleAnimal[choice + 1]}
            choice={choice + 1}
            onClickChoice={onClickChoice}
          />
        </>
      )}
    </div>
  );
};

export default Worldcup;
