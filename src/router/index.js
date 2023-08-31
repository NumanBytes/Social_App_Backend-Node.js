import { Router } from "express";
import postRouter from "./postRouter.js";
import UserRouter from "./userRouter.js";

const mainRouter = new Router();

mainRouter.use(UserRouter);
mainRouter.use(postRouter);

export default mainRouter;