import { useEffect, useState } from "react";
import LogIn from "./components/Login";
import TodoCard from "./components/TodoCard";
import axios from "axios";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [user, setUser] = useState();
  const [todos, setTodos] = useState();

  const onClickLogOut = () => {
    setUser(undefined);
  };
  // todo list 가져오는 함수 - GET
  const getTodos = async () => {
    try {
      if (!user) return;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${user.id}`
      );

      console.log(response);
      setTodos(response.data.todos);
    } catch (error) {
      console.error(error);
      alert("todo list를 불러오지 못했습니다.");
    }
  };

  // 유저가 있어야 todo도 불러올 수 있음
  useEffect(() => {
    // 로그인 전에도 App.jsx는 렌더링 되기 때문에 user 없을 때는 useEffect 빠져나가도록
    // 아래 if문이 getTodos() 안에 있어도 같은 기능 함
    // if (!user) return;

    // todo list 가져오기
    getTodos();
    console.log(user);
  }, [user]);

  // return도 결과값으로 줄 수 있음 user 없으면 로그인 페이지 보여주기
  if (!user) {
    // 유저가 아직 로그인 안 함 - 로그인페이지
    return <LogIn setUser={setUser} />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">
        {user.account}'s AWESOME TO DO LIST 😎
        <button
          className="ml-4 px-2 py-1 bg-pink-200 hover:bg-pink-400 rounded-lg text-gray-50 text-base"
          onClick={onClickLogOut}
        >
          로그아웃
        </button>
      </h1>

      <div>
        <div className="mt-8 text-sm font-semibold">
          If I only had an hour to chop down a tree, I would spend the first 45
          minutes sharpening my axe, Abrabam Lincoln
        </div>
        <div className="text-xs">
          나무 베는데 한 시간이 주어진다면, 도끼를 가는데 45분을 쓰겠다,
          에비브러햄 링컨
        </div>
        <CreateTodo userId={user.id} setTodos={setTodos} todos={todos} />
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        {todos &&
          todos.map((v, i) => {
            return <TodoCard key={i} todo={v.todo} isDone={v.isDone} />;
          })}
      </div>
    </div>
  );
}

export default App;
