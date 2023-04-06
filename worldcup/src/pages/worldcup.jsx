import { useState } from "react";
import { useEffect } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      // 함수 안 넣으면(또는 양수) : 아스키코드 기준 가나다 정렬, 음수 : 역순으로 출력
      // -0.5~0.5 사이 숫자, 랜덤하게 정렬
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []);
  useEffect(() => console.log(animalData), []);
  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {/* 에러 발생 Cannot read properties of undefined (reading '7') */}
      {/* 사이드 이펙트 */}
      {/* 렌더링 되는 시점에서 useEffect는 아직 실행 안됨. 데이터가 없음. useState 기준으로 초기값 필요
      useEffect는 사이드에서 결과값만 넘겨줌 */}
      {shuffleAnimal && (
        <>
          <AnimalCard animal={shuffleAnimal[0]} />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard animal={shuffleAnimal[1]} />
        </>
      )}
    </div>
  );
};

export default Worldcup;
