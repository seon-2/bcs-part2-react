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
  //   console.log(req.body); // vscode의 터미널에서 확인 >> undefined
  // postman에서 body-raw-json 간단한 json 넣어서 확인해도 >> undefined
  // app.js에 미들웨어 추가 후 POST 요청 보내면 확인 가능>> { title: '피자 먹기 🍕', desc: '맛있는 피자 🍕' }

  // 구조분해
  const { title, desc } = req.body;
  //   console.log(title, desc); // vscode의 터미널에서 확인 >> 피자 먹기 🍕 맛있는 피자 🍕
  todoData.push({ title, desc, isDone: false }); // 실제로는 DB에 push 해야 함. 로컬에 있는 todoData.json 파일이 바뀌진 않음
  //   todoData.push({ title: title, desc: desc }); // 같음!
  console.log(todoData);

  // res.send() 없으면 서버 멈추기 때문에 임시로 작성, push 한 todoData 확인 가능
  // res는 하나의 라우터에 하나만 존재!
  res.json(todoData);
});

// todo 완료 수정 - UPDATE (http://localhost:3010/todo/done/1)
router.put("/done/:id", (req, res) => {
  //   console.log(req.params); // >> { id: '1' }
  const { id } = req.params; // id 받아오기

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title, // 안 바뀌는 부분. 기존 것 그대로
    desc: todoData[parseInt(id)].desc, // 안 바뀌는 부분. 기존 것 그대로
    isDone: !todoData[parseInt(id)].isDone, // 원래 isDone과 반대로 update. !은 not을 의미함. true <-> false
  };

  console.log(todoData);

  res.json(todoData);
});

// exports 필요
module.exports = router;
