import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");

  const onSubmitCreateTodo = async (e) => {
    try {
      // onSubmit 새로고침 막기
      e.preventDefault();

      // title 비어있는 것 확인
      if (!title) {
        alert("타이틀을 입력해주세요!");
      }
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
