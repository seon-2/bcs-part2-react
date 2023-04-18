require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 비동기 함수 openAI와의 통신을 기다림
app.post("/chat", async (req, res) => {
  try {
    // console.log(req.headers.authorization);
    // console.log(process.env.SECRET_KEY);
    // console.log(req.headers.authorization === process.env.SECRET_KEY);

    // key 비교 (authorization에 Bearer라는 글자가 포함되어있어서 바로 비교 불가)
    // token 없이 post 요청 보냈을 시 에러남. authorization에 undefined 담김. undefined는 substring 불가능
    if (req.headers.authorization === undefined) {
      return res.send("토큰 없음");
    }
    console.log(
      req.headers.authorization.substring(7) === process.env.SECRET_KEY
    );
    console.log(
      req.headers.authorization === "Bearer " + process.env.SECRET_KEY
    );

    res.send("임시");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀`);
});
