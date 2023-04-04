import Card from "./components/Card";
import cardData from "./cardData.json";

function App() {
  return (
    <div className="bg-red-100">
      {cardData.map((v, i) => {
        return <Card key={i} symbol={v.symbol} score={v.score} />;
      })}
    </div>
  );
}

export default App;
