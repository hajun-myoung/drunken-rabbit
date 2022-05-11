import cors from "cors";
import express from "express";
import { userRouter } from "./routers/userRouter.js";
import { worldRouter } from "./routers/worldRouter.js";
import { mainRouter } from "./routers/mainRouter.js";
import { detailRouter } from "./routers/detailRouter.js";
import { myPageRouter } from "./routers/myPageRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// CORS 에러 방지
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//여기에 router들 작성
app.use(userRouter);
app.use(worldRouter);
app.use(mainRouter);
app.use(myPageRouter);
app.use(detailRouter);

// Heroku 배포를 위해 express에서 static한 파일들을 사용할 수 있게끔 함
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../front", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front", "build", "index.html"));
});

export { app };
