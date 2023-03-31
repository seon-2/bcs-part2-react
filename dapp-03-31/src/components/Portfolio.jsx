const Portfolio = () => {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      <li className="bg-purple-200 w-60 h-72 rounded-xl">
        {/* 높이 절반, 이미지 들어오면 object-fit : cover, 위에만 둥글게 (-t) */}
        <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
          프로젝트 이미지
        </div>
        {/* 텍스트 사이즈, 굵기, 위쪽(top), x축에 (왼, 오 모두) */}
        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
        <div className="mt-2 mx-2">프로젝트 설명</div>
      </li>
      <li className="bg-purple-200 w-60 h-72 rounded-xl">
        <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
          프로젝트 이미지
        </div>
        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
        <div className="mt-2 mx-2">프로젝트 설명</div>
      </li>
      <li className="bg-purple-200 w-60 h-72 rounded-xl">
        <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
          프로젝트 이미지
        </div>
        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
        <div className="mt-2 mx-2">프로젝트 설명</div>
      </li>
      <li className="bg-purple-200 w-60 h-72 rounded-xl">
        <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
          프로젝트 이미지
        </div>
        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
        <div className="mt-2 mx-2">프로젝트 설명</div>
      </li>
      <li className="bg-purple-200 w-60 h-72 rounded-xl">
        <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
          프로젝트 이미지
        </div>
        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
        <div className="mt-2 mx-2">프로젝트 설명</div>
      </li>
      <li className="bg-purple-200 w-60 h-72 rounded-xl">
        <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
          프로젝트 이미지
        </div>
        <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
        <div className="mt-2 mx-2">프로젝트 설명</div>
      </li>
    </ul>
  );
};

export default Portfolio;