// axios get 요청(주소 https://green-bush-5824.fly.dev)를 받아서 화면에 메세지 표시하기

import axios from "axios";
import { useState } from "react";

function D() {
  const [message, setMessage] = useState("");
  const handleGetApi = async () => {
    try {
      const response = await axios.get("https://green-bush-5824.fly.dev");
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <button className="btn-style" onClick={handleGetApi}>
        요청
      </button>
      <div className="text-main mt-4 text-bold text-4xl">{message}</div>
    </div>
  );
}

export default D;
