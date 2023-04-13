const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

// prisma client 사용 선언
const client = new PrismaClient();

// user 생성 - POST
// BE와 통신하기 위해 비동기로. async, await 사용
router.post("/", async (req, res) => {
  try {
    // req.body에서 account 받아오기
    const { account } = req.body;

    // DB와 통신 - prisma client 사용. js도 만든 테이블 자동완성 지원
    const user = await client.user.create({
      data: {
        account,
      },
    });

    // 응답 잘 갔는지 확인, user 보내기
    res.json({ ok: true, user });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
