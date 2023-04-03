import { fakeUseState } from "../fakeHooks"; // index는 그 자체로 처음 시작을 의미해서 import할 때 파일 이름까지 넣어주지 않아도 됨

function Card({ color, cardName }) {
  // 이런 형식으로 fakeUseState 를 구조분해할당해서 받아올 수 있음.
  const [count, setCount] = fakeUseState();

  // App.jsx(부모)로부터 값을 내려받을 수 있음
  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}

export default Card;
