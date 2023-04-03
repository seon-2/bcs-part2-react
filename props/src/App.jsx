import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-12 grid grid-cols-3">
      {/* 카드(자식)에게 넘겨줄 값 작성 */}
      <Card cardName="A" color="bg-red-100" />
    </div>
  );
}

export default App;
