const GameResult = () => {
  const point = localStorage.getItem("point") | 0;
  // 현재는 화면 처음 켤 때 현재점수에 아무것도 안 나타남 (0도) => 해결! 만약 없으면(null)이면 0으로 초기화

  // grow는 부모가 flex여야 함.
  return (
    <div className="bg-pink-300 w-full grow flex flex-col justify-end items-center text-white pb-8 shadow-pink-300 shadow-lg">
      <div className="text-8xl font-black">Up & Down</div>
      <div className="text-2xl">현재 점수 : {point}</div>
    </div>
  );
};

export default GameResult;
