import { createError } from "../error.js";
import VideoModel from "../models/Video.js";
import UserModel from "../models/User.js";

//add Video
export const addVideo = async (req, res, next) => {
  const newVideo = new VideoModel({
    userId: req.user.id,
    ...req.body,
  });
  console.log(req.body, newVideo);
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

// update Video
export const updateVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found ... !"));

    if (req.user.id === req.params.id) {
      const updatedVideo = await VideoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json("Video Updated", updateVideo);
    } else {
      return next(createError(403, "You can only update your Video ... !"));
    }
  } catch (error) {
    next(error);
  }
};

// delete Video
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found ... !"));

    if (req.user.id === req.params.id) {
      await VideoModel.findByIdAndUpdate(req.params.id);
      res.status(200).json("Video Deleted");
    } else {
      return next(createError(403, "You can only delete your Video ... !"));
    }
  } catch (error) {
    next(error);
  }
};

// get Video
export const getVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found ... !"));

    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

// add Video
export const addView = async (req, res, next) => {
  try {
    await VideoModel.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });

    res.status(200).json("Video Views Updated ...!");
  } catch (error) {
    next(error);
  }
};

// get random Video
export const randomVideo = async (req, res, next) => {
  try {
    const videos = await VideoModel.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

// get trendy Video
export const trendVideo = async (req, res, next) => {
  try {
    const videos = await VideoModel.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

// get subscribed channels Video
export const subscribedChannelVideos = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return VideoModel.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    next(error);
  }
};

//get videos by tag
export const getVideoByTag = async (req, res, next) => {
  const tags= req.query.tags
  console.log(tags)
  // try {
  //   const user = await UserModel.findById(req.user.id);
  //   const subscribedChannels = user.subscribedUsers;

  //   const list = await Promise.all(
  //     subscribedChannels.map((channelId) => {
  //       return VideoModel.find({ userId: channelId });
  //     })
  //   );
  //   res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  // } catch (error) {
  //   next(error);
  // }
};

//search video by title
export const searchByTitle = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return VideoModel.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    next(error);
  }
};
