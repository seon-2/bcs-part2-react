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
    // key 비교 (authorization에 Bearer라는 글자가 포함되어있어서 바로 비교 불가)
    // if문 대신에 optional chaining 사용
    const bearerToken = req.headers.authorization?.substring(7);

    console.log(bearerToken);
    console.log(process.env.SECRET_KEY);
    console.log(bearerToken === process.env.SECRET_KEY);

    res.send("임시");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀`);
});
