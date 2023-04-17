import { useState } from "react";
import LogIn from "./components/Login";
import TodoCard from "./components/TodoCard";

function App() {
  const [user, setUser] = useState();

  const onClickLogOut = () => {
    setUser(undefined);
  };

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
        <form className="flex mt-2">
          <input
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
            type="text"
          />
          <input
            className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50"
            type="submit"
            value="새 투두 생성"
          />
        </form>
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        <TodoCard />
      </div>
    </div>
  );
}

export default App;
