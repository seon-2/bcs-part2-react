function Card({ color, cardName }) {
  // App.jsx(부모)로부터 값을 내려받을 수 있음
  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}

export default Card;
