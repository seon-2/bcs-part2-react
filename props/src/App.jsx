import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen p-12 grid grid-cols-3">
      {/* 카드(자식)에게 넘겨줄 값 작성 */}
      <Card cardName="A" color="bg-red-100" />
      <Card cardName="B" color="bg-orange-100" />
      <Card cardName="C" color="bg-yellow-100" />
      <Card cardName="D" color="bg-green-100" />
      <Card cardName="E" color="bg-blue-100" />
      <Card cardName="F" color="bg-purple-100" />
    </div>
  );
}

export default App;
