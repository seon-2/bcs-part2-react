import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect } from "react";
import { useState } from "react";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
// console.log(contract);

const Main = ({ account }) => {
  // 전체 nft 개수 받는 변수
  const [totalNft, setTotalNft] = useState(0);

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

  // useEffect로 확인
  useEffect(() => {
    getTotalNft();
  }, []);

  return (
    <div>
      <Intro totalNft={totalNft} />
    </div>
  );
};

export default Main;
