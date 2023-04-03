// pages 폴더에서 페이지들 관리, 페이지 이름은 소문자
// 사람마다 다를 수 있음! (컨벤션)

function Main() {
  return (
    // 헤더, 푸터 높이값 보존한 상태에서 나머지 늘어가는 것을 보장<-> shrink
    <div className="pageFrame">Main 페이지</div>
  );
}

export default Main;
