import { createError } from "../error.js";
import User from "../models/User.js";
//updateUser
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

//delete a user
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User account has been deleted ...!");
    } catch (error) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only delete your account ...!"));
  }
};

//get a user
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(err);
  }
};

//subscribe a user
export const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { subscribedUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("Subscription Successfull ...!");
  } catch (error) {
    next(error);
  }
};

//unsubscribe a user
export const unsubscriveUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });

    res.status(200).json("Unsubscription Successfull ...!");
  } catch (error) {
    next(error);
  }
};

//like a video
export const likeVideo = async (req, res, next) => {};

//dislike a video
export const unlikeVideo = async (req, res, next) => {};
