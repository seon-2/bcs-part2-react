const AnimalCard = ({ animal, choice, onClickChoice }) => {
  return (
    <div className="flex flex-col justify-normal items-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
        alt="동물"
      />
      <div className="text-2xl mt-4 font-bold">{animal} 💕💕💕</div>
      <button
        className={`text-2xl mt-4 px-4 py-2 rounded-md ${
          // 2로 나눴을 때 나머지가 0이면 짝수, 아니면(1이면) 홀수
          choice % 2 === 0 ? "bg-pink-400" : "bg-violet-400"
        }`}
        // onClickChoice 함수에 선택한 동물 이름을 전달해줌
        onClick={onClickChoice(animal)}
      >
        선택
      </button>
    </div>
  );
};

export default AnimalCard;
