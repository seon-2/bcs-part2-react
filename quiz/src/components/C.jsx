// Component, Props & map함수를 활용하여 7가지의 색상을 가진 div 박스 만들기

import Card from "./Card";

// 부모 - C.jsx, 자식 - Card.jsx
function C() {
  const bgColors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-purple-400",
    "bg-main",
  ];
  return (
    <div className="bg-red-100 h-screen flex justify-center items-center">
      {bgColors.map((v, i) => {
        return <Card key={i} bgColor={v}></Card>;
      })}
    </div>
  );
}

export default C;
