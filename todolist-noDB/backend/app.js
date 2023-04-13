// import 와 같은 기능
const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");

// express를 사용
const app = express();

// 포트번호 설정
const port = 3010;

// cors 미들웨어 추가 - http://localhost:3000 만 허용하도록 수정
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// json 형식 읽을 수 있게 하는 미들웨어 추가
app.use(express.json());
// /todo 경로에 todoRouter 연결
app.use("/todo", todoRouter);

// get 요청은 2가지 인자 필요 : 주소와 (요청, 응답)
// get 요청은 크롬 등 인터넷에 http://localhost:3010 로 접근해서 확인 가능
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 서버 시작하는 명령어 2가지 인자 필요 : 포트번호, 화살표 함수 안에 서버가 실행될 때 실행될 내용
app.listen(port, () => {
  console.log(`Server listening on port ${port} 👂`);
});
