// import express
const express = require("express");
// todoData 가져오기
let todoData = require("../todoData.json");

// 라우터 설정
const router = express.Router();

// 전체 todo list 조회 - READ (http://localhost:3010/todo)
router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData); // json 형식
});

// todo 생성 - CREATE (http://localhost:3010/todo)
router.post("/", (req, res) => {
  // FE에서 할일(title)과 설명(desc) 요청 보내기

  //   console.log(req); // req 확인해보기. 많은 데이터(body, header ...등)가 req에 있음
  console.log(req.body); // vscode의 터미널에서 확인 >> undefined
  // postman에서 body-raw-json 간단한 json 넣어서 확인해도 >> undefined
  // app.js에 미들웨어 추가 후 POST 요청 보내면 확인 가능>> { title: '피자 먹기 🍕', desc: '맛있는 피자 🍕' }

  // res.send() 없으면 서버 멈추기 때문에 임시로 작성
  res.send("임시로 투두 생성.");
});

// exports 필요
module.exports = router;
