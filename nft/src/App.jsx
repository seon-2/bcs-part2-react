import { useEffect, useState } from "react";
import Web3 from "web3";
import { ABI, CONTRACT_ADDRESS } from "./web3.config";

// web3 선언
// const web3 = new Web3();
// mumbai로 web3 선언
const web3 = new Web3("https://rpc-mumbai.maticvigil.com");
// contract 선언
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

function App() {
  const [account, setAccount] = useState("");

  // 메타마스크 있을 때 Proxy 출력, 없으면 undefined
  // useEffect(() => {
  //   console.log(window.ethereum);
  // }, []);

  // 메타마스크 지갑 연결
  const onClickAccount = async () => {
    try {
      // 지갑 주소 가져오기
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // console.log(accounts);
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  // 로그아웃 기능 (완전히 연결 끊는 것은 아님)
  const onClickLogOut = () => {
    setAccount("");
  };

  // web3 확인해보기
  useEffect(() => {
    console.log(web3);
    console.log(contract);
  }, []);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div className="text-main font-semibold">
          {account.substring(0, 4)}...{account.substring(account.length - 4)}
          <button className="ml-4 btn-style" onClick={onClickLogOut}>
            로그아웃
          </button>
        </div>
      ) : (
        <button className="btn-style" onClick={onClickAccount}>
          <img
            className="w-12"
            src={`${process.env.PUBLIC_URL}/images/metamask.png`}
            alt="metamask"
          />
        </button>
      )}
    </div>
  );
}

export default App;
