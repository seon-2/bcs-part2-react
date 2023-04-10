import { FcCloseUpMode } from "react-icons/fc";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
// https://react-icons.github.io/react-icons 에서 원하는 아이콘 찾아서 경로 import
// 원하는 icon 이름 그대로! 가져오기

function App() {
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {/* 사이즈, 색상 설정 */}
      <FcCloseUpMode size={100} />
      <BsFillAirplaneEnginesFill size={100} color="lightblue" />
    </div>
  );
}

export default App;
