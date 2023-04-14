const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

// prisma client 사용 선언
const client = new PrismaClient();

// todo 생성 - POST
router.post("/", async (req, res) => {
  try {
    const { todo, userId } = req.body;

    // todo 비어있을 때 예외처리
    if (!todo) {
      return res.status(400).json({ ok: false, error: "Not exist todo." });
    }
    // 존재하지 않는 userId 예외처리
    if (!userId) {
      return res.status(400).json({ ok: false, error: "Not exist userId." });
    }
    // 유저 조회
    const user = await client.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    // 없는 유저인지 확인
    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user." });
    }

    // 생성
    const newTodo = await client.todo.create({
      data: {
        todo,
        isDone: false,
        userId: user.id,
      },
    });

    res.json({ ok: true, todo: newTodo });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
