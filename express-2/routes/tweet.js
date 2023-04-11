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
  // 왜 post 요청 때는 id로 접근 안 하나요??
  // 생성페이지를 요청했을 때에는 id가 부여되지 않고 생성이 완료 되면, DB와 연결해 id 부여하는 작업이 이뤄집니다.
  // 예) 트윗 작성 페이지에 들어갔을 때는 트윗 아이디 부여 아직 안 된 상태
  //    (안 적고 나올 수도 있으니까! 페이지에 들어올 때마다 id 부여하면 DB 조회, 생성 등 낭비가 심함)
  //    트윗 버튼을 누르면 그 때 DB 조회 -> id 생성 -> id 부여
  res.send("트윗 생성");
});

// 게시물 수정 - UPDATE (특정 트윗 수정)
router.put("/:id", (req, res) => {
  res.send("트윗 수정");
});

// 게시물 삭제 - DELETE (특정 트윗 삭제)
router.delete("/:id", (req, res) => {
  res.send("트윗 삭제");
});

// exports 필요
module.exports = router;
