function App() {
  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-start items-center pt-16 px-4">
      <form className="flex w-full">
        <input
          className="grow border-2 border-gray-300 rounded-lg focus:outline-main shadow-lg"
          type="text"
        />
        <input
          className="ml-4 px-2 py-1 border-2 border-main text-main rounded-lg shadow-lg"
          type="submit"
        />
      </form>
      <div className="mt-16 bg-main p-4 text-gray-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa a
        autem voluptatem est molestias recusandae quis! Reiciendis voluptas
        asperiores perferendis ex mollitia nisi illum, iste ea possimus officia
        non?
      </div>
    </div>
  );
}

export default App;
