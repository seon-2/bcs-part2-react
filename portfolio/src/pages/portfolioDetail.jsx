import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function PortfolioDetail() {
  // useSearchParams 사용 선언
  const [searchParams] = useSearchParams();
  //searchParams로 age라는 키의 값을 받아와서 received_age 변수에 저장
  const received_age = searchParams.get("age");

  useEffect(() => {
    // received_age 변수에 담긴 값 출력해보기
    console.log(received_age);
  }, []);

  return (
    <div className="bg-green-100 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <div>프로젝트 이미지</div>
      <div>프로젝트 타이틀</div>
      <div>프로젝트 설명</div>
    </div>
  );
}

export default PortfolioDetail;
