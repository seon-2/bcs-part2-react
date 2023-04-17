import { useState } from "react";
import axios from "axios";

const LogIn = ({ setUser }) => {
  const [createAccount, setCreateAccount] = useState("");

  // 유저 생성 - CREATE
  const onSubmitCreateAccount = async (e) => {
    try {
      // 새로고침 방지
      e.preventDefault();

      // .env 파일 만들어서 REACT_APP_BACKEND_URL 설정 (git에는 안 올림!) .env 생성, 수정 시 FE npm run start 다시
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        {
          account: createAccount,
        }
      );

      setUser(response.data.user);

      console.log(response);
    } catch (error) {
      console.error(error);
      // 이미 있는 계정 생성 시 alert 띄우기
      // try 안에서 if문으로 검사하면 작동 안 함
      alert("계정 생성에 실패하였습니다.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="flex mt-2 my-16" onSubmit={onSubmitCreateAccount}>
        <input
          className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
          type="text"
          value={createAccount}
          onChange={(e) => {
            setCreateAccount(e.target.value);
          }}
        />
        <input
          className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50 w-24"
          type="submit"
          value="계정 생성"
        />
      </form>
    </div>
  );
};

export default LogIn;
