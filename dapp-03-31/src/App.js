function App() {
  let noUseState = 0;

  noUseState = 1;

  const onClickAdd = () => {
    // 똑같이 변수에 1씩 더하는 코드
    // noUseState = noUseState + 1;
    // noUseState += 1;
    noUseState++;
    // 버튼 눌러도 화면에서 숫자 증가 안함
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{noUseState}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-md"
        onClick={onClickAdd}
      >
        +
      </button>
    </div>
  );
}

export default App;
