import { fakeUseState } from "../fakeHooks"; // index는 그 자체로 처음 시작을 의미해서 import할 때 파일 이름까지 넣어주지 않아도 됨
import { useState } from "react";

function Card({ color, cardName }) {
  // 이런 형식으로 fakeUseState 를 구조분해할당해서 받아올 수 있음.
  // const [count, setCount] = fakeUseState();

  // 객체인 fakeUseState. 순서 상관 없음
  const { setValue, value } = fakeUseState();
  // const { setValue, value } = fakeUseState(); // 키 중복으로 오류 발생
  const { setValue: setNum3, value: num3 } = fakeUseState(); // 이렇게 따로 설정해줘야 함
  const { setValue: setNum4, value: num4 } = fakeUseState();

  // useState와 비교 (계산기 실습)
  const [count, setCount] = useState();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  // App.jsx(부모)로부터 값을 내려받을 수 있음
  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}

export default Card;
