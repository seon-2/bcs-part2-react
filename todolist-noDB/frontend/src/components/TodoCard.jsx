import axios from "axios";

const TodoCard = ({ title, isDone, index, getToDoList }) => {
  // true <-> false 바꿔주는 함수
  const onClickToggle = async () => {
    // api 요청
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`
      );
      // console.log(response);

      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }

      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isDone ? (
        // 완료 처리
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-8 h-8 scale-75 rounded-xl"></div>
          </div>
          <div className="text-2xl ml-4 line-through">{title}</div>
        </li>
      ) : (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
          <div className="text-2xl ml-4 ">{title}</div>
        </li>
      )}
    </>
  );
};
export default TodoCard;
