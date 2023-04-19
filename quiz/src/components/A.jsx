// div의 높이를 화면 사이즈로 맞추고 div의 요소들을 flex를 이용하여 가운데 배치하기 & Hello, React라고 적힌 A 컴포넌트 만들기.

function A() {
  return (
    <div className="bg-red-100 h-screen flex justify-center items-center">
      Hello, React!
    </div>
  );
}

export default A;
