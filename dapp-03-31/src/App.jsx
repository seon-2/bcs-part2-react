// ./components/A 경로에서 A.jsx 가져오기 (경로 확인 잘하기!)
import A from "./components/A";

function App() {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {/* 1 부분 src/components/A.jsx 로 이동*/}
      <A />
      {/* 가져온 A.jsx 붙이기 */}
      <div className="bg-green-300 w-full h-80">
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}2{/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
      <div className="bg-purple-300 w-full h-80">
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}3{/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
}

export default App;
