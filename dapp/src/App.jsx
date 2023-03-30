import "./App.css";

function App() {
  return (
    <div>
      {/* jsx에서는 class 대신 className 사용 */}
      <h1 className="p-12 br-12 inline-block bg-c-lightblue">hello react!</h1>
      <h2 className="p-12 br-12 inline-block m-l-12 bg-c-lightgray">
        My name is JISEON
      </h2>
      <h3 className="p-12 br-12 inline-block m-l-12 bg-c-lightcoral ">
        My favorite flower is tulip.🌷
      </h3>
    </div>
  );
}

export default App;
