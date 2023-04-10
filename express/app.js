// express import 해오기
const express = require("express");

// 사용하기 위해서 변수 app에 담기
const app = express();

// 포트번호 설정 (react는 create-react-app에서 알아서 3000번으로 설정힘)
const port = 3010;

// req(요청) : FE가 보내준 값, res : 응답
// "/" 주소(기본경로)로 요청 들어왔을 때 해줄 것 : "Hello, Express!" 보내기
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 세부 경로 설정
app.get("/abc", (req, res) => {
  res.send("ABC");
});

// post 요청 - postman 또는 insomnia에서 확인 가능
app.post("/", (req, res) => {
  res.send("This is Post Request");
});

// put 요청
app.put("/", (req, res) => {
  res.send("This is Put Request");
});

// delete 요청
app.delete("/", (req, res) => {
  res.send("This is Delete Request");
});

// 서버 켜기(시작) 포트번호, 화살표 함수 안에 서버가 실행될 때 실행될 내용
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
