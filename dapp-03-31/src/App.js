function App() {
  let noUseState = 0;

  noUseState = 1;

  const onClickAdd = () => {
    console.log("clicked!");
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
