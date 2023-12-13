import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  randomVideo,
  searchByTitle,
  subscribedChannelVideos,
  trendVideo,
  updateVideo,
  getVideoByTag,
} from "../controllers/VideoController.js";

const videoRouter = express.Router();

//create a vide
videoRouter.post("/add", verifyToken, addVideo);
videoRouter.put("/:id", verifyToken, updateVideo);
videoRouter.delete("/:id", verifyToken, deleteVideo);
videoRouter.get("/find/:id", getVideo);
videoRouter.put("/views/:videoId", addView);
videoRouter.get("/trend", trendVideo);
videoRouter.get("/random", randomVideo);
videoRouter.get("/sub", verifyToken, subscribedChannelVideos);
videoRouter.get("/tags", getVideoByTag);
videoRouter.get("/search", searchByTitle);

export default videoRouter;
