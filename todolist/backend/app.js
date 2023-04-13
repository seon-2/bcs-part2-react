const express = require("express");
const cors = require("cors");

const app = express();

const port = 3010;

// user.js 연결
const userRouter = require("./routes/user");

// 미들웨어 추가
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port} 🌷`);
});
