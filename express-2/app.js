// import 와 같은 기능 
const express = require("express");

// express를 사용하기 위해서
const app = express();

// 포트번호 설정 (react는 3000번)
const port = 3010;

// get 요청은 2가지 인자 필요 : 주소와 (요청, 응답)
// get 요청은 크롬 등 인터넷에 http://localhost:3010 로 접근해서 확인 가능
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/user/:id", (req, res) => {
  res.send("유저정보 조회");
});

app.get("/todos", (req, res) => {
  res.send("투두리스트 조회");
});

// 한 파일에서 REST API를 이렇게 호출하면 불편한 점?
// 코드가 길어지고 반복됨. 구별이 안 됨
// -> 라우팅으로 해결 가능 

// post 요청 - postman 또는 insomnia에서 확인 가능
app.post("/", (req, res) => {
  res.send("Post");
});

// put 요청
app.put("/", (req, res) => {
  res.send("Put");
});

// delete 요청
app.delete("/", (req, res) => {
  res.send("Delete");
});

// 서버 시작하는 명령어 2가지 인자 필요 : 포트번호, 화살표 함수 안에 서버가 실행될 때 실행될 내용
app.listen(port, () => {
  console.log(`Server listening on port ${port} 🫧`);
});
