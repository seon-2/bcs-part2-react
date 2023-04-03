function Date(props) {
  console.log(props);

  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      {/* {``} 백틱으로 바꾸면 js 코드 사용 가능 */}
      {/* 삼항연산자 [조건] ? 참이면 실행될 코드 : 거짓이면 실행될 코드*/}
      <div
        className={`${
          props.day === "SUN"
            ? "bg-red-400"
            : props.day === "SAT"
            ? "bg-orange-400"
            : "bg-blue-400"
        } rounded-t-lg px-2 py-1 text-xl text-white`}
      >
        {props.date}
      </div>
      <ul className="p-2 text-lg h-20 ">
        {props.todos.map((v, i) => {
          return <li>{v}</li>;
        })}
      </ul>
    </li>
  );
}

export default Date;
