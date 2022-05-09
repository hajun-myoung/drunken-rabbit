import is from "@sindresorhus/is";
import { Router } from "express";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
import { userAuthService } from "../services/userService.js";
import { login_required } from "../middlewares/login_required.js";

const userRouter = Router();

//회원가입용 함수
userRouter.post(
  "/user/register",
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error("body 제대로 안 넘어왔습니다.");
      }

      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const rePassword = req.body.rePassword;

      if (rePassword != password) {
        throw new Error("패스워드가 일치하지 않습니다. 다시 확인해주세요");
      }

      const newUser = await userAuthService.addUser({
        name,
        email,
        password,
      });
      if (newUser.errorMessage) {
        throw new Error(newUser.errorMessage);
      }
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
  errorMiddleware,
);

userRouter.get(
  "/user/current",
  login_required,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const user_id = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        user_id,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  },
);

//Login용 함수
userRouter.post(
  "/user/login",
  async function (req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      console.log(email);
      const user = await userAuthService.getUser({ email, password });
      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  errorMiddleware,
);

export { userRouter };
