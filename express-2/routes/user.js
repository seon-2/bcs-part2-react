const express = require("express");

// 라우터 설정
const router = express.Router();

// app.js 에서 app -> router
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

// exports 필요
module.exports = router;
