import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/UserRoute.js";
import videoRouter from "./routes/VideoRoute.js";
import commentRouter from "./routes/CommentRoute.js";
import authRouter from "./routes/AuthRoute.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

//mongodb connection
const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Connect to MongoDb Successfully ...!"))
    .catch((error) => console.log(error));
};

//routes
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/video", videoRouter);
app.use("/api/comment", commentRouter);

//error
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

//listen
const port = process.env.PORT;
app.listen(port, () => {
  connect();
  console.log("Express server initialized on port " + port + " ...!");
});
