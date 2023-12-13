import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  deleteUser,
  getUser,
  likeVideo,
  dislikeVideo,
  subscribeUser,
  unsubscriveUser,
  updateUser,
} from "../controllers/UserController.js";

const userRouter = express.Router();

//update a user
userRouter.put("/:id", verifyToken, updateUser);

//delete a user
userRouter.delete("/:id", verifyToken, deleteUser);

//get a user
userRouter.get("/find/:id", getUser);

//subscribe a user
userRouter.put("/sub/:id", verifyToken, subscribeUser);

//unsubscribe a user
userRouter.put("/unsub/:id", verifyToken, unsubscriveUser);

//like a video
userRouter.put("/like/:videoId", verifyToken, likeVideo);

//dislike a video
userRouter.put("/dislike/:videoId", verifyToken, dislikeVideo);

export default userRouter;
