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

// todo 조회 - GET
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // todo 조회 전, user 있는지 체크
    const user = await client.user.findMany({
      where: {
        id: parseInt(userId),
      },
      // 0번부터 3개 출력 (findMany로 조회할 때는 값이 많을 수도 있기 때문에)
      // 실제 동작할 때는 skip이 take만큼 더해져야 함 (0 -> 3 -> 6 ...)
      //   skip: 0,
      //   take: 3,
    });

    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user." });
    }

    // 조건을 만족하는(여기에서는 userId가 일치하는) 값이 여러 개일 때 findMany 사용
    // findUnique는 유일한 값으로 찾음. 스키마에서 @unique로 설정한
    // 하나만 찾을 때는 findFirst
    const todos = await client.todo.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    // console.log(todos);

    res.json({ ok: true, todos });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
