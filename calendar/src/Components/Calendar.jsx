import Date from "./Date";
import calendarData from "../calendarData.json";

function Calendar() {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023년 04월</div>
      <ul className="grid grid-cols-7 gap-4">
        {calendarData.map((v, i) => {
          // v는 value, i는 index (파라미터이기 때문에 변수는 마음대로 해도 됨!)
          // index와 value 콘솔에 출력해보기 (콘솔에 2번 찍히지만, 이거는 -> 디버깅 렌더링 때문에! (index.js의 React.StrictMode) 실습 시 끄지 않는 것이 좋음_디버깅)
          // -> Warning: Each child in a list should have a unique "key" prop. 에러 확인!
          console.log(`index : ${i + 1}, value : ${v}`);
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />; // key prop 추가해서 에러 해결!
        })}
      </ul>
    </div>
  );
}

export default Calendar;
