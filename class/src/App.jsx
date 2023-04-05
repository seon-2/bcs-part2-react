import ClassComp from "./components/ClassComp";
import FunctionalComp from "./components/FunctionalComp";

function App() {
  return (
    <div className="bg-red-100 flex">
      <ClassComp />
      <FunctionalComp />
    </div>
  );
}

export default App;
