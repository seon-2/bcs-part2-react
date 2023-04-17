import axios from "axios";
import { useState } from "react";

const TodoCard = ({ todo, isDone, id, userId }) => {
  const [todoIsDone, setTodoIsDone] = useState(isDone);

  // todo 완료 - UPDATE  
  const onClickDone = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${id}/done`,
        {
          userId,
        }
      );
      // response에는 업데이트 된 todo 정보 들어있음
      setTodoIsDone(response.data.todo.isDone);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex my-4">
        {todoIsDone ? (
          <>
            <button className="relative" onClick={onClickDone}>
              <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
              <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
            </button>
          </>
        ) : (
          <button
            className="border-4 border-pink-400 w-8 h-8 rounded-xl"
            onClick={onClickDone}
          ></button>
        )}
        <div className="text-2xl ml-4 truncate">{todo}</div>
      </div>
    </>
  );
};

export default TodoCard;
