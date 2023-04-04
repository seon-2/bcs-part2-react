import { useSearchParams } from "react-router-dom";

function PortfolioDetail() {
  // useSearchParams 사용 선언
  const [searchParams] = useSearchParams();
  //searchParams로 title, desc, image 받아오기
  const received_title = searchParams.get("title");
  const received_desc = searchParams.get("desc");
  const received_image = searchParams.get("image");

  return (
    <div className="bg-green-100 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      {/* 받아온 데이터 화면에 출력 */}
      <div>
        <img src={`${process.env.PUBLIC_URL}/${received_image}`} alt="" />
      </div>
      <div>{received_title}</div>
      <div>{received_desc}</div>
    </div>
  );
}

export default PortfolioDetail;
