const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model");
const saveModel = require("../models/save.model");


const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }
  console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    img_url: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;
  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden Content.",
    });
  }

  return res.status(200).json({
    message: "Post Details fetched successfully",
    post,
  });
}

async function likePostController(req, res) {
  const { postId } = req.params;
  const { username } = req.user;

  const existingLike = await likeModel.findOne({
    post: postId,
    user: username,
  });

  if (existingLike) {
    await likeModel.deleteOne({ _id: existingLike._id });
    return res.status(200).json({ isLiked: false });
  }

  await likeModel.create({ post: postId, user: username });
  res.status(200).json({ isLiked: true });
}

async function getFeedController(req, res) {
  const user = req.user;
  let posts = await postModel
    .find({})
    .populate("user")
    .sort({ _id: -1 })
    .lean();

  posts = await Promise.all(
    posts.map(async (post) => {
      const isLiked = await likeModel.findOne({
        user: user.username,
        post: post._id,
      });

      const isSaved = await saveModel.findOne({
        user: user.username,
        post: post._id,
      })

      post.isLiked = Boolean(isLiked);
      post.isSaved = Boolean(isSaved);

      return post;
    }),
  );

  res.status(200).json({
    message: "posts fetched successfully. ",
    posts,
  });
}

async function savePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const existingSave = await saveModel.findOne({
    post: postId,
    user: username,
  });

  if (existingSave) {
    await saveModel.deleteOne({ _id: existingSave._id });
    return res
      .status(200)
      .json({ message: "Post removed from saves", isSaved: false });
  } else {
    await saveModel.create({ post: postId, user: username });
    return res
      .status(200)
      .json({ message: "Post saved successfully", isSaved: true });
  }
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  getFeedController,
  savePostController,
};
