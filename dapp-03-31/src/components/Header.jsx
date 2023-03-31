const Header = () => {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        {/* <div>jiseon's portfolio</div> */}
        <div>
          {/* 로고이미지로 교체 가능 */}
          {/* <img className="w-12" src={SunriseLogo} alt="SunriseLogo"></img> */}
          <div>jiseon's portfolio</div>
        </div>
        <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
          <li className="bg-indigo-300 btn-style">Introduce</li>
          <li className="bg-purple-300 btn-style">Portfolio</li>
          <li className="bg-blue-300 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
