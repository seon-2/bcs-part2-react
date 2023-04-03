function Card(props) {
  // App.jsx(부모)로부터 값을 내려받을 수 있음
  return <div className={`${props.color} w-40 h-60`}>{props.cardName}</div>;
}

export default Card;
