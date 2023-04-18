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
    const { content } = req.body;
    const bearerToken = req.headers.authorization?.substring(7);

    // 키 입력, 유무 확인
    if (bearerToken !== process.env.SECRET_KEY) {
      return res
        .status(400)
        .json({ ok: false, error: "올바른 키를 입력해주세요." });
    }
    // body 안 보낸 경우 예외 처리
    if (!content) {
      return res.status(400).json({ ok: false, error: "질문을 입력해주세요." });
    }

    res.send("임시");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀`);
});
