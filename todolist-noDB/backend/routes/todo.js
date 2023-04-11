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

// 특정 todo list 조회 - READ (http://localhost:3010/todo/1)
router.get("/:id", (req, res) => {
  const { id } = req.params; // id 받아오기

  // 예외 처리 - 배열 인덱스를 벗어난 id가 왔을 때. 400에러
  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID 입니다." });
  }

  res.json(todoData[parseInt(id)]);
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

  // 예외 처리 - title, desc 입력이 둘 중 하나라도 없을 때. 400 에러
  if (!title || !desc) {
    return res.status(400).json({ error: "title과 desc을 모두 입력해야 합니다." });
  }

  todoData.push({ title, desc, isDone: false }); // 실제로는 DB에 push 해야 함. 로컬에 있는 todoData.json 파일이 바뀌진 않음
  //   todoData.push({ title: title, desc: desc }); // 같음!
  console.log(todoData);

  // res.send() 없으면 서버 멈추기 때문에 임시로 작성, push 한 todoData 확인 가능
  // res는 하나의 라우터에 하나만 존재!
  res.json(todoData);
});

// todo 수정 - UPDATE (http://localhost:3010/todo/1)
router.put("/:id", (req, res) => {
  const { id } = req.params; // id 받아오기
  const { title, desc } = req.body;

  // 예외 처리 - 배열 인덱스를 벗어난 id가 왔을 때. 400에러
  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID 입니다." });
  }

  // 예외 처리 - title, desc 입력이 둘 다 없을 때. 400 에러
  if (!title && !desc) {
    res
      .status(400)
      .json({ error: "title이나 desc 중 하나의 값은 입력해야 합니다." });
  }

  todoData[parseInt(id)] = {
    // title, desc 중 하나만 바뀌면 나머지는 이전값 그대로 가져오고 새로운 값만 수정
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone, // isDone은 원래 배열 그대로
  };

  console.log(todoData);

  res.json(todoData);
});

// todo 완료 수정 - UPDATE (http://localhost:3010/todo/done/1)
router.put("/done/:id", (req, res) => {
  //   console.log(req.params); // >> { id: '1' }
  const { id } = req.params; // id 받아오기

  // 예외 처리 - 배열 인덱스를 벗어난 id가 왔을 때. 400에러
  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID 입니다." });
  }

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title, // 안 바뀌는 부분. 기존 것 그대로
    desc: todoData[parseInt(id)].desc, // 안 바뀌는 부분. 기존 것 그대로
    isDone: !todoData[parseInt(id)].isDone, // 원래 isDone과 반대로 update. !은 not을 의미함. true <-> false
  };

  console.log(todoData);

  res.json(todoData);
});

// todo 삭제 - DELETE (http://localhost:3010/todo/1)
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // 예외 처리 - 배열 인덱스를 벗어난 id가 왔을 때. 400에러
  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID 입니다." });
  }

  todoData = todoData.filter((v, i) => {
    // return 뒤의 조건이 참일 때만 결과값에 담김
    // id가 1번이면 삭제해야 함
    // i(인덱스)가 1번이 아닌 데이터만 담김(필터링)
    return parseInt(id) !== i;
    // 지금 예제는 삭제, 추가 시 배열의 길이가 바뀌게 되어서(인덱스도 따라서 바뀌게 되기 때문에) 좋지 않음. -> json에 id 값 포함하는 것이 좋음
  });
  console.log(todoData);

  res.json(todoData);
});
// exports 필요
module.exports = router;
