import { useEffect } from "react";

const Nfts = ({ page }) => {
  // page 잘 받아오는지 확인. 의존성배열 빈값으로 두면, useState 초기값만 들어옴
  useEffect(() => {
    console.log(page);
  }, [page]);

  // page 숫자를 가져와서 숫자만큼 버튼 만들기. for문 사용
  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button key={i}>
          {i + 1} <span>페이지</span>
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
