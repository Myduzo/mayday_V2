import express from "express";
import { Post } from "../models/Post.js";
import { User } from "../models/User.js";

export const router = express.Router();

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts
router.get("/timeline/:id", async (req, res) => {
  try {
    //const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({});
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});


//get user's all posts
router.get("/profile/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.userId});
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*get user's phone
router.post("/phone", async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (!user){
      res.status(404).json("user not found");
      return;
    }

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});*/