import Date from "./Date";
import calendarData from "../calendarData.json";

function Calendar() {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023년 04월</div>
      {calendarData.map((v, i) => { // v는 value, i는 index (파라미터이기 때문에 변수는 마음대로 해도 됨!)
        return <Date />;
      })}
    </div>
  );
}

export default Calendar;
