import { useState } from "react";

function App() {
  // 지갑주소 받는 변수
  const [account, setAccount] = useState("");

  // 지갑 연결(로그인)
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {/* account 있으면 account 화면에 출력, 아니면 로그인 버튼 화면에 출력 */}
      {account ? (
        <div>{account}</div>
      ) : (
        <button onClick={onClickAccount}>지갑로그인</button>
      )}
    </div>
  );
}

export default App;
