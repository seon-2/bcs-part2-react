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
      // console.log(mintNft);

      if (!mintNft.status) return;

      // balanceOf(주소) -> 주소가 가진 nft 개수 반환
      const balanceOf = await contract.methods.balanceOf(account).call();
      console.log(balanceOf);

      // tokenOfOwnerByIndex(주소, index) -> 주소가 가진 nft를 배열로 저장해놨는데, 그 배열[index]의 tokenId 반환
      // 여기에서는 마지막 요소의 tokenId 반환
      const tokenOfOwnerByIndex = await contract.methods
        .tokenOfOwnerByIndex(account, parseInt(balanceOf) - 1)
        .call();
      console.log(tokenOfOwnerByIndex);

      // tokenURI(tokenId) -> 해당 nft의 메타데이터 uri 반환
      const tokenURI = await contract.methods
        .tokenURI(tokenOfOwnerByIndex)
        .call();
      console.log(tokenURI);
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
