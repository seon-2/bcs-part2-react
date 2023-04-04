function Card() {
  return (
    <div className="relative w-24 h-36 flex justify-center items-center border-2 border-black">
      <div className="absolute top-0 left-0 m-1">♥︎</div>
      <div>A</div>
      <div className="absolute bottom-0 right-0 m-1">♥︎</div>
    </div>
  );
}

export default Card;
