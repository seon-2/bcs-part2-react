import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect } from "react";
import { useState } from "react";
import Nfts from "../components/Nfts";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
// console.log(contract);

const Main = ({ account }) => {
  // 전체 nft 개수 받는 변수
  const [totalNft, setTotalNft] = useState(0);
  // 발행된 nft 개수 받는 변수
  const [mintedNft, setMintedNft] = useState(0);
  // 내가 가진 nft 개수 받는 변수
  const [myNft, setMyNft] = useState(0);
  // 페이지 수 받는 변수
  const [page, setPage] = useState(1);

  // contract에서 전체 nft 개수 가져오기
  const getTotalNft = async () => {
    try {
      // contract가 없으면 해당 함수 빠져나감
      if (!contract) return;

      // totalNft() : 발행된 전체 nft개수 반환
      const totalNft = await contract.methods.totalNft().call();
      setTotalNft(totalNft);
    } catch (error) {
      console.error(error);
    }
  };

  // contract에서 발행된 nft 개수 가져오기
  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNft(response);
      //   console.log(response);

      // 페이지 계산
      // 페이지 1~10 : 1페이지, 11~20 : 2페이지
      // 10 - 1 = 9, 9 / 10 = 0, 0 + 1 = 1, 1페이지
      setPage(parseInt((parseInt(response) - 1) / 10) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  // 내가 가진 nft 개수 가져오기
  const getMyNft = async () => {
    try {
      // contract가 없거나 account가 없으면 해당 함수 빠져나감
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect로 확인
  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  // getMyNft는 account에 따라 달라지기 때문에 따로 만들고 의존성 배열 추가
  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <div>
      <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nfts page={page} mintedNft={mintedNft} />
    </div>
  );
};

export default Main;
