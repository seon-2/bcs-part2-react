const PortfolioCard = () => {
  return (
    <li className="bg-purple-200 w-60 h-72 rounded-xl">
      {/* 높이 절반, 이미지 들어오면 object-fit : cover, 위에만 둥글게 (-t) */}
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        프로젝트 이미지
      </div>
      {/* 텍스트 사이즈, 굵기, 위쪽(top), x축에 (왼, 오 모두) */}
      <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
      <div className="mt-2 mx-2">프로젝트 설명</div>
    </li>
  );
};

export default PortfolioCard;
