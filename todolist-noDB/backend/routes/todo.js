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

// exports 필요
module.exports = router;
