/**
 * # React Challenge
 * A. div의 높이를 화면 사이즈로 맞추고 div의 요소들을 flex를 이용하여 가운데 배치하기 & Hello, React라고 적힌 A 컴포넌트 만들기
 * B. useState, button-onClick을 사용하여 +를 누르면 1증가, -를 누르면 1감소하는 Counter
 * C. Component, Props & map함수를 활용하여 7가지의 색상을 가진 div 박스 만들기 부모 - C.jsx, 자식 - Card.jsx
 * D. axios get 요청(주소 https://green-bush-5824.fly.dev/)를 받아서 화면에 메세지 표시하기
 */

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";

function App() {
  return (
    <div className="bg-red-100 h-screen flex justify-center items-center">
      <A></A>
      {/* <B></B> */}
      {/* <C></C> */}
      {/* <D></D> */}
    </div>
  );
}

export default App;
