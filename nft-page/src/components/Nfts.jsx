import { useState } from "react";
import { useEffect } from "react";

const Nfts = ({ page }) => {
  // 현재 선택된 페이지 담는 변수
  const [selectedPage, setSelectedPage] = useState(1);

  // 클릭 이벤트와 selectedPage 연결. 이차함수
  // onClickPage = (p) => {} 이렇게 넣으면 안되는 이유는 p에 event가 들어가기 때문!
  const onClickPage = (p) => () => {
    setSelectedPage(p);
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

  return (
    <div>
      <div>{pageComp()}</div>
    </div>
  );
};

export default Nfts;
