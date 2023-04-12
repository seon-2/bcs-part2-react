import axios from "axios";
import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

function App() {
  const [toDoList, setToDoList] = useState();

  // axios는 비동기 -> 함수 따로 만들어서 async, await && try catch
  // axios는 http 통신을 도와주는 라이브러리! (http 통신 : FE와 BE 연결)
  const getToDoList = async () => {
    try {
      // get() 안에 주소 넣기
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );
      // console.log(response);
      /**
       * ERROR 발생 - CORS
       * AxiosError
       * Access to XMLHttpRequest at 'http://localhost:3010/todo' from origin 'http://localhost:3000' has been blocked by CORS policy...
       * => CORS 라이브러리 설치 필요
       */

      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다.");
        return;
      }

      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">🌷 AWESOME TO DO LIST 🌷</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          The past can hurt. But from the way I see it, you can either run from
          it, or learn from it. - Lion King
        </div>
        <div className="text-xs">
          과거가 널 아프게 할 수도 있다. 하지만 과거에서 도망치는 것도 과거에서
          배우는 것도 네 선택이다. - 라이온 킹 🦁
        </div>
        <CreateTodo />
      </div>
      <ul className="mt-16 flex flex-col w-1/2">
        {/* toDoList가 있을 때, toDoList를 돌면서 모든 데이터 출력 */}
        {toDoList &&
          toDoList.map((v, i) => {
            return <TodoCard key={i} title={v.title} />;
          })}
      </ul>
    </div>
  );
}

export default App;
