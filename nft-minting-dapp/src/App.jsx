import { useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./web3.config";

const web3 = new Web3(window.ethereum);
// contract 선언 (abi, ca) 순서
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
// console.log(contract);

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

  // nft 민팅
  const onClickMint = async () => {
    try {
      const mintNft = await contract.methods.mintNft().send({ from: account });

      console.log(mintNft);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {/* account 있으면 account 화면에 출력, 아니면 로그인 버튼 화면에 출력 */}
      {account ? (
        // 앞 뒤에 4글자, 나머지는 ...
        <div>
          {account.substring(0, 4)}...{account.substring(account.length - 4)}
          <button onClick={onClickMint}>민팅</button>
        </div>
      ) : (
        <button onClick={onClickAccount}>지갑로그인</button>
      )}
    </div>
  );
}

export default App;
