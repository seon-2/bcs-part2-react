const express = require("express");

// 라우터 설정
const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트윗 조회");
});

// app.js 에서 app -> router
router.get("/:id", (req, res) => {
  console.log(req.params);
  // http://localhost:3010/tweet/1 으로 요청 -> { id: '1' } vscode 콘솔에 찍힘
  // http://localhost:3010/tweet/2 으로 요청 -> { id: '2' } vscode 콘솔에 찍힘
  res.send("특정 트윗 조회");
});

// 게시물 생성 - CREATE
router.post("/", (req, res) => {
  res.send("트윗 생성");
});

// 게시물 수정 - UPDATE (특정 트윗 수정)
router.put("/:id", (req, res) => {
  res.send("트윗 수정");
});

// exports 필요
module.exports = router;
