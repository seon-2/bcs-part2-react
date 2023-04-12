import axios from "axios";
import { useState } from "react";

const CreateTodo = ({ getToDoList }) => {
  const [title, setTitle] = useState("");

  const onSubmitCreateTodo = async (e) => {
    try {
      // onSubmit 새로고침 막기
      e.preventDefault();

      // title 비어있는 것 확인
      if (!title) {
        alert("타이틀을 입력해주세요!");
      }
      // axios 요청이 올 때 까지 기다렸다가
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/todo`,
        {
          title, // 생략 가능
          desc: `${title} 아자아자 화이팅!`,
        }
      );
      //   console.log(response);
      if (response.status !== 200) {
        alert("데이터를 불러오지 못했습니다.");
        return;
      }

      // 성공 되었을 때만 todo list 불러오는 GET 함수 실행
      getToDoList();

      // 입력창 비워주기
      setTitle("");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex mt-2" onSubmit={onSubmitCreateTodo}>
      <input
        className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
        type="text"
        value={title}
        // title을 입력창에서 입력한 값으로 상태 변경
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50"
        type="submit"
        value="todo 생성"
      />
    </form>
  );
};
export default CreateTodo;
