import axios from "axios";
import { useEffect, useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // form 태그의 onSubmit 안에 들어가서, 엔터로 검색 시 새로고침 막음.
  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (isLoading) {
        // 검색 완료될 때 까지 alert("검색중입니다..."); 뜨도록
        alert("검색중입니다...");
        return;
      }

      // 빈 입력창으로 검색 버튼 눌렀을 때
      if (!question) {
        alert("질문을 입력해주세요.");
        return;
      }

      // 로딩 중 true로 바꿈. 응답 받기 직전에(응답 동안에 로딩중 true), 응답 받고 나면 false
      setIsLoading(true);
      // setContent 초기화 : 기존 검색 지우기
      setContent("");

      // axios.post 요청 : url, body, headers - auth 토큰 설정
      const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
          question: `${question}`,
          //   question: question, 같은 표현
        },
        {
          headers: {
            Authorization: "Bearer BLOCKCHAINSCHOOL3",
          },
        }
      );
      // 200번 에러가 오면 alert 처리
      if (response.status !== 200) {
        alert("오류가 발생했습니다.");
        // 로딩중 false로 바꿈
        setIsLoading(false);
        return;
      }

      console.log(response); // 데이터 콘솔로 출력되는지 확인
      // response에서 원하는 부분만 content에 담기
      setContent(response.data.choices[0].message.content);

      // 로딩중 false로 바꿈
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // 로딩중 false로 바꿈
      setIsLoading(false);
    }
  };
  // cf. 잘 받아와지는지 확인
  //   useEffect(() => {
  //     console.log(question);
  //   }, [question]);

  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input
          type="text"
          className="text-black"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input type="submit" value="검 색" />
      </form>
      {/* content 가 있으면 div 보여줌 */}
      {content && <div className="mt-4 px-16">{content}</div>}
    </div>
  );
};

export default Chat;
