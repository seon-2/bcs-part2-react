import { useEffect } from "react";

function PortfolioCard({ title, desc, image }) {
  // Portfolio에서 props로 값 내려받아 적용
  useEffect(() => {
    console.log(title);
    console.log(desc);
    console.log(image);
  }, []);

  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        프로젝트 이미지
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
    </li>
  );
}

export default PortfolioCard;
