import { useState } from "react";

const FunctionalComponent = () => {
  // 필요한 기능 하나만 가져와서 사용
  const [count, setCount] = useState(0);
  
  return <div className="bg-blue-100 h-96">FunctionalComponent</div>;
};

export default FunctionalComponent;
