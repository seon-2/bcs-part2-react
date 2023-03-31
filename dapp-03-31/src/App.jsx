import Header from "./components/Header";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex">
          내 소개
        </div>
        {/* 포트폴리오 카드 */}
        {/* 그리드 줄에 2개씩 / 여백은 gap, p(padding) / sm-lg, 1-4까지 크기에 따라 반응형 줄 수 있음*/}
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
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>
      </main>
      <footer className="max-w-screen-xl mx-auto flex justify-end py-1 md:py-2 text-main-200">
        2023, designed by, jiseon
      </footer>
    </div>
  );
}

export default App;
