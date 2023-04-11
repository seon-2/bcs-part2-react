const express = require("express");

// 라우터 설정
const router = express.Router();

// app.js 에서 app -> router
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

// 회원가입 (유저 생성) - CREATE
router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});

// exports 필요
module.exports = router;
