function App() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">🌷 AWESOME TO DO LIST 🌷</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          The past can hurt. But from the way I see it, you can either run from
          it, or learn from it. - Lion King
        </div>
        <div className="text-xs">
          과거가 널 아프게 할 수도 있다. 하지만 과거에서 도망치는 것도 과거에서
          배우는 것도 네 선택이다. - 라이온 킹 🦁
        </div>
        <form className="flex mt-2">
          <input
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
            type="text"
          />
          <input
            className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50"
            type="submit"
            value="todo 생성"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
