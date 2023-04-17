import axios from "axios";
import { useState } from "react";

// todo 생성 - CREATE
const CreateTodo = ({ userId, getTodos }) => {
  // 입력창에서 받는, 사용자가 작성하는 to 저장하는 변수
  const [todo, setTodo] = useState("");

  const onSubmitCreateTodo = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/todo`,
        {
          todo,
          userId,
        }
      );

      //   console.log(response);

      // 완료 되었을 때 투두리스트 갱신
      getTodos();
      
      // 검색창 초기화
      setTodo("");
    } catch (error) {
      console.error(error);
      alert("todo 생성 중 에러가 발생하였습니다.")
    }
  };

  return (
    <form className="flex mt-2" onSubmit={onSubmitCreateTodo}>
      <input
        className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50"
        type="submit"
        value="새 투두 생성"
      />
    </form>
  );
};

export default CreateTodo;
