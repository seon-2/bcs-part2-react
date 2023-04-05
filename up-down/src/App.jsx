import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

// 현재 up&down 게임 문제점 : 정답을 맞춰도 점수가 바로 반영되지 않음
// 데이터를 위에서 (App.jsx)에서 props로 내려받으면 바로 적용이 될텐데
// board에서 점수가 갱신되기 때문에 result에 바로 반영이 안 됨
// 부모-자식 관계라기보다는 형제 관계? 에 가까움. 
// -> props 지옥...!

function App() {
  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if (!savedPoint) {
      localStorage.setItem("point", 0);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GameResult />
      <GameBoard />
    </div>
  );
}

export default App;
