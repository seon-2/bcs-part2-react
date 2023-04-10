import axios from "axios";
import { useEffect, useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");

  // form 태그의 onSubmit 안에 들어가서, 엔터로 검색 시 새로고침 막음.
  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();
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
      console.log(response); // 데이터 콘솔로 출력되는지 확인
    } catch (error) {
      console.error(error);
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
    </div>
  );
};

export default Chat;
