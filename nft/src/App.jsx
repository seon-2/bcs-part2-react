import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  MINT_CONTRACT_ABI,
  MINT_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS,
} from "./web3.config";

// web3 선언
// const web3 = new Web3();
// 메타마스크 연결된 provider로 web3 선언
const web3 = new Web3(window.ethereum);
// token contract 선언
const tokenContract = new web3.eth.Contract(
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS
);
// nft contract 선언
const nftContract = new web3.eth.Contract(
  MINT_CONTRACT_ABI,
  MINT_CONTRACT_ADDRESS
);

function App() {
  const [account, setAccount] = useState("");
  const [myBalance, setMyBalance] = useState();

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

  // 잔액조회 기능
  const onClickBalance = async () => {
    try {
      if (!account || !tokenContract) return;

      const balance = await tokenContract.methods.balanceOf(account).call();

      // console.log(balance);
      setMyBalance(web3.utils.fromWei(balance));
    } catch (error) {
      console.error(error);
    }
  };

  // 민팅 기능
  const onClickMint = async () => {
    try {
      const result = await nftContract.methods
        .mintNft(
          "https://gateway.pinata.cloud/ipfs/QmYKncC786nYN97h9T3tz7KnCy59sEhjSQw36Y1NsTPYiA"
        )
        .send({
          from: account,
        });

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // web3 확인해보기
  useEffect(() => {
    console.log(web3);
    console.log(tokenContract);
  }, []);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div>
          <div className="text-main font-semibold text-2xl">
            {account.substring(0, 4)}...
            {account.substring(account.length - 4)}
            <button className="ml-4 btn-style" onClick={onClickLogOut}>
              로그아웃
            </button>
          </div>
          <div className="flex items-center mt-4">
            {myBalance && <div>{myBalance} bcs3</div>}
            <button className="ml-2 btn-style" onClick={onClickBalance}>
              잔액 조회
            </button>
          </div>
          <div className="flex items-center mt-4">
            <button className="ml-2 btn-style" onClick={onClickMint}>
              민팅
            </button>
          </div>
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
