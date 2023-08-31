import dotenv from "dotenv";
dotenv.config();
import express from "express";
import postRouter from "./router/postRouter.js";
import userRouter from "./router/userRouter.js";
import connectDB from "./config/db.js";


const app = express();
app.use(express.json());
connectDB();

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(3300, () => {
  console.log("Listening on port 3300");
});
