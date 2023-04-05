import { useState } from "react";
import Child from "./components/Child";
import ChildFriend from "./components/ChildFriend";

function App() {
  const [gift, setGift] = useState(10000000);

  return (
    <div className="bg-red-100">
      <Child gift={gift} />
      <ChildFriend gift={gift} />
    </div>
  );
}

export default App;
