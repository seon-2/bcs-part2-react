import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NftCard from "./NftCard";

const Nfts = ({ page, mintedNft }) => {
  // 현재 선택된 페이지 담는 변수
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  // 페이지 별로 nft 10개씩 불러오기
  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        // (p - 1) * 10 따로 i + 1 따로 생각하면 조금 편합니다.
        // 페이지 하나에 10개씩 출력해야 합니다. (1페이지에는 1~10, 2페이지에는 11~20)
        // i는 0~9까지 하나씩 커지니까 1페이지는 i+1만 있어도 구현이 가능합니다.
        // 같은 식을 사용해 2가 들어올 때 11~20을 만들어주려면 어떻게 하면 좋을까요?
        // 10+1, 10+2, 10+3, ... 10+10 이렇게 i+1에 10씩 더해주면 됩니다.
        // 그 다음 페이지는 20, 30 ,,, 계속 i+1에 더해주면 되겠죠?
        // p를 사용해서 p가 1일 때는 10을 안 더해야 하고, p가 2일 때는 10을 더하고, p가 3일 때는 20을 더하고 ...
        // 그래서 (p - 1) * 10이라는 식이 세워졌습니다.
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        // console.log(response);

        nftArray.push({ tokenId, metadata: response.data });
      }
      setNfts(nftArray);
    } catch (error) {
      console.log(error);
    }
  };

  // 클릭 이벤트와 selectedPage 연결. 이차함수
  // onClickPage = (p) => {} 이렇게 넣으면 안되는 이유는 p에 event가 들어가기 때문!
  const onClickPage = (p) => () => {
    setSelectedPage(p);
    // 클릭했을 때 nft 불러오기
    getNfts(p);
  };

  // page 잘 받아오는지 확인. 의존성배열 빈값으로 두면, useState 초기값만 들어옴
  useEffect(() => {
    console.log(page);
  }, [page]);

  // page 숫자를 가져와서 숫자만큼 버튼 만들기. for문 사용
  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  useEffect(() => {
    // page가 1인 상태 테스트 (1~10번 nft 불러옴)
    getNfts(1);
  }, []);

  // tokenId와 metadata가 담긴 nftArray 확인
  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <div>{pageComp()}</div>
      <ul className="mt-8 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-8">
        {nfts ? (
          nfts.map((v, i) => {
            // console.log(v);
            return (
              <NftCard
                key={i}
                tokenId={v.tokenId}
                metadata={v.metadata}
                mintedNft={mintedNft}
              />
            );
          })
        ) : (
          <div>로딩중입니다...</div>
        )}
      </ul>
    </div>
  );
};

export default Nfts;
