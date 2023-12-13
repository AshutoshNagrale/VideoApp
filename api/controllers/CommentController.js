import { createError } from "../error.js";
import CommentModel from "../models/Comment.js";
import VideoModel from "../models/Video.js";
import commentRouter from "../routes/CommentRoute.js";

//add comment
export const addComment = async (req, res, next) => {
  const newComment = new CommentModel({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};

//delete comment
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    const video = await VideoModel.findById(req.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await CommentModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment Deleted ...!");
    } else {
      return next(createError(403, "You can only delete your comment"));
    }
  } catch (error) {
    next(error);
  }
};

//get all comment
export const getComments = async (req, res, next) => {
  try {
    const comments = await CommentModel.find(req.params.id);
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
