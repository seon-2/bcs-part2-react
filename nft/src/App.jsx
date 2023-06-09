import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  MINT_CONTRACT_ABI,
  MINT_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS,
} from "./web3.config";
import axios from "axios";

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
  const [nftMetadata, setNftMetadata] = useState();

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
      const uri =
        "https://gateway.pinata.cloud/ipfs/QmYKncC786nYN97h9T3tz7KnCy59sEhjSQw36Y1NsTPYiA";

      const result = await nftContract.methods.mintNft(uri).send({
        from: account,
      });

      console.log(result);
      // false면 (민팅 안되었으면) 넘어가기
      if (!result.status) return;
      // tokenURI에서 받아오는 uri가 mintNft에 보내는 주소와 같음!!
      // 정석버전으로 한 이유는 컨트랙트로부터 데이터를 받아오는 방법을 알아보기 위해서

      // 민팅한 nft 이미지를 화면에 보여주기 (정석?적인 방법) - 문제점 : 사용자가 응답 받는 시간이 느림.
      // balanceOf에서 내(넣은 주소)가 가진 nft의 총 개수를 알 수 있음.
      // const balanceOf = await nftContract.methods.balanceOf(account).call();
      // // console.log(balanceOf);

      // // tokenOfOwnerByIndex에서 주소와 index를 넣으면 내(넣은 주소)가 가진 마지막 nft의 tokenId를 알려줌
      // // index는 내(넣은 주소)가 가진 nft의 번호, tokenId는 각 nft가 고유하게 가지고 있는 id
      // const tokenOfOwnerByIndex = await nftContract.methods
      //   .tokenOfOwnerByIndex(account, parseInt(balanceOf) - 1)
      //   .call();

      // // tokenURI에 tokenId를 넣으면 해당 nft의 메타데이터 주소를 받을 수 있음
      // const tokenURI = await nftContract.methods
      //   .tokenURI(parseInt(tokenOfOwnerByIndex))
      //   .call();

      // uri로부터 데이터 가져오기 - GET
      const response = await axios.get(uri);
      setNftMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // web3 확인해보기
  // useEffect(() => {
  //   console.log(web3);
  //   console.log(tokenContract);
  // }, []);

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
            {nftMetadata && (
              <div>
                <img src={nftMetadata.image} alt="NFT" />
                <div>Name : {nftMetadata.name}</div>
                <div>Description : {nftMetadata.description}</div>
                {nftMetadata.attributes.map((v, i) => {
                  return (
                    <div key={i}>
                      <span>{v.trait_type} : </span>
                      <span>{v.value}</span>
                    </div>
                  );
                })}
              </div>
            )}
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
