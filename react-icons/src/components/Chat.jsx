import { useEffect, useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");

  // form 태그의 onSubmit 안에 들어가서, 엔터로 검색 시 새로고침 막음.
  const onSubmitChat = (e) => {
    e.preventDefault();
  };
  // cf. 잘 받아와지는지 확인
  useEffect(() => {
    console.log(question);
  }, [question]);
  
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
