import Counter from "./components/Counter";

function App() {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <Counter />
      <button className="bg-pink-300 px-4 py-2 rounded-2xl text-white font-bold mt-4">
        버튼
      </button>
    </div>
  );
}

export default App;
