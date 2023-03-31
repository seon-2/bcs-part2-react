function App() {
  let noUseState = 0;

  noUseState = 1;

  const onClickAdd = (num) => (e) => {
    // 차수 늘려서
    console.log(e);
    console.log(num);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{noUseState}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-md"
        onClick={onClickAdd(2)}
      >
        +
      </button>
    </div>
  );
}

export default App;
