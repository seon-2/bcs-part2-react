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
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="projectImg"
        />
        {/* public 경로에서 이미지 불러오는 방법 (json 파일에 img 경로 추가해줘함) */}
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
    </li>
  );
}

export default PortfolioCard;
