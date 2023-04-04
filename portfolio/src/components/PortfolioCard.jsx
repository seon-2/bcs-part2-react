import { useEffect } from "react";
import { Link } from "react-router-dom";

function PortfolioCard({ title, desc, image, index }) {
  // Portfolio에서 props로 값 내려받아 적용
  useEffect(() => {
    console.log(title);
    console.log(desc);
    console.log(image);
  }, []);

  const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ];

  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl relative">
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
      {/* 포트폴리오 상세페이지로 이동. 그런데, 모든 버튼이 같은 페이지로 연결됨. (해당하는 각 프로젝트를 보여줘야 함) */}
      {/* index 사용해서 해당하는 각 프로젝트로 다이나믹 라우팅 */}
      {/* url에 정보를 담아서 상세페이지로 보내기. name이라는 key로 h662라는 값을, age라는 key로 18이라는 값을 보냄 */}
      <Link to={`/portfolio/${index + 1}?name=h662&age=18`}>
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full ${
            colors[index % colors.length]
          }`}
        >
          {/* index를 배열의 길이로 나누어 나머지 값으로 색상 할당 */}
          View
        </button>
      </Link>
    </li>
  );
}

export default PortfolioCard;
