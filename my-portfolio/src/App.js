function App() {
  // extension Tailwind CSS IntelliSense 설치하고 해당 코드 부분에 마우스 올리면 어떤 코드인지 나옴
  // bg-red-100 : 배경색 빨간색으로,
  // min-h-screen : 최소 높이값 지정. 100vh 하면 세로 전체폭에 적용됨
  // h는 96까지 숫자가 들어감
  // max-w-screen-xl: 1280px 이상 커지지 않음.
  // mx-auto : margin l, r auto로. 즉 중간 정렬
  // h-full : 높이 100% (부모와 높이 똑같이)
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>jiseon's portfolio</div>
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-300 px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Introduce
            </li>
            <li className="bg-purple-300 px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Portfolio
            </li>
            <li className="bg-blue-300 px-2 py-1 rounded-md text-gray-100 cursor-pointer">
              Contact Me
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
