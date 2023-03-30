import SunriseLogo from "./images/sunrise.jpeg";

function App() {
  // extension Tailwind CSS IntelliSense 설치하고 해당 코드 부분에 마우스 올리면 어떤 코드인지 나옴
  // bg-red-100 : 배경색 빨간색으로,
  // min-h-screen : 최소 높이값 지정. 100vh 하면 세로 전체폭에 적용됨
  // h는 96까지 숫자가 들어감
  // max-w-screen-xl: 1280px 이상 커지지 않음.
  // mx-auto : margin l, r auto로. 즉 중간 정렬
  // h-full : 높이 100% (부모와 높이 똑같이)
  // gap-[10px] 이렇게 px 사이즈 정해서 사용할 수 있음
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          {/* <div>jiseon's portfolio</div> */}
          <div>
            <img className="w-12" src={SunriseLogo} alt="SunriseLogo"></img>
          </div>
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
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
