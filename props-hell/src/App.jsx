import { createContext, useState } from "react";
import Child from "./components/Child";
import ChildFriend from "./components/ChildFriend";

const AppContext = createContext();

function App() {
  const [gift, setGift] = useState(10000000);
  return (
    // App 전체에 영향 미치도록 최상단에 위치
    <AppContext.Provider value={{gift, setGift}}>
      <div className="bg-red-100">
        <Child />
        <ChildFriend />
      </div>
    </AppContext.Provider>
  );
}

export default App;
