// ./components/A 경로에서 A.jsx 가져오기 (경로 확인 잘하기!)
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

function App() {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {/* 1 부분 src/components/A.jsx 로 이동*/}
      <A /> 
      {/* 가져온 A.jsx 붙이기 */}
      {/* 2 부분 src/components/B.jsx 로 이동*/}
      <B />
      {/* 가져온 B.jsx 붙이기 */}
      {/* 3 부분 src/components/C.jsx 로 이동*/}
      <C /> 
      {/* 가져온 C.jsx 붙이기 */}
    </div>
  );
}

export default App;
