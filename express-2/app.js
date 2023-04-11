// import 와 같은 기능 
const express = require("express");
// user.js 연결(import)
const userRouter = require("./routes/user");

// express를 사용하기 위해서
const app = express();

// 포트번호 설정 (react는 3000번)
const port = 3010;

// 미들웨어 (접근경로, 연결대상)
app.use("/user", userRouter);

// get 요청은 2가지 인자 필요 : 주소와 (요청, 응답)
// get 요청은 크롬 등 인터넷에 http://localhost:3010 로 접근해서 확인 가능
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 서버 시작하는 명령어 2가지 인자 필요 : 포트번호, 화살표 함수 안에 서버가 실행될 때 실행될 내용
app.listen(port, () => {
  console.log(`Server listening on port ${port} 🫧`);
});
