import Date from "./Date";

function Calendar() {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023년 04월</div>
      <Date />
    </div>
  );
}

export default Calendar;
