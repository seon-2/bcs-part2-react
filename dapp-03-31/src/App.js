function App() {
  let noUseState = 0;

  noUseState = 1;

  const onClickAdd = (e) => {
    // 이벤트가 input으로 들어감
    console.log(e);
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
