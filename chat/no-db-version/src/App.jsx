import axios from "axios";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");

  // gpt에 질문 보내기 - POST
  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
        }
      );

      setResult(response.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-start items-center pt-16 px-4">
      <form className="flex w-full" onSubmit={onSubmitChat}>
        <input
          className="grow border-2 border-gray-300 rounded-lg focus:outline-main shadow-lg"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="ml-4 px-2 py-1 border-2 border-main text-main rounded-lg shadow-lg"
          type="submit"
        />
      </form>
      <div className="mt-16 bg-main p-4 text-gray-50">
        {result && (
          <div className="mt-16 bg-main p-4 text-gray-50">{result}</div>
        )}
      </div>
    </div>
  );
}

export default App;
