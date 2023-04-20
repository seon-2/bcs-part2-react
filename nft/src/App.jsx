import { useEffect } from "react";

function App() {
  // 메타마스크 있을 때 Proxy 출력, 없으면 undefined
  useEffect(() => {
    console.log(window.ethereum);
  }, []);

  // 메타마스크 지갑 연결
  const onClickAccount = async () => {
    try {
      // 지갑 주소 가져오기 
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <button className="btn-style" onClick={onClickAccount}>
        <img
          className="w-12"
          src={`${process.env.PUBLIC_URL}/images/metamask.png`}
          alt="metamask"
        />
      </button>
    </div>
  );
}

export default App;
