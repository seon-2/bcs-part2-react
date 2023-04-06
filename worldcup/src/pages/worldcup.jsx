import { useState } from "react";
import { useEffect } from "react";
import animalData from "../animalData.json";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      // 함수 안 넣으면(또는 양수) : 아스키코드 기준 가나다 정렬, 음수 : 역순으로 출력
      // -0.5~0.5 사이 숫자, 랜덤하게 정렬
      return Math.random() - 0.5;
    });

    console.log(shuffleAnimalData);
  }, []);
  useEffect(() => console.log(animalData), []);
  return <div>Worldcup</div>;
};

export default Worldcup;
