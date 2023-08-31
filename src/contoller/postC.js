import { postModel } from "../model/posts.js";

const postController = {
  createPost: async (req, res) => {
    try {
      const { title, description, user_id } = req.body;
      const newPost = await postModel.create({
        title: body.title,
        description: body.description,
        user_id: req.user?.id,
      });
      await newPost.save();
      res.status(201).json({ message: "Post Created", newPost });
    } catch (error) {
      res.status(400).json({
        message: "Error occured in creating a post.",
        error: error.message,
      });
    }
  },
  getAllPost: async (req, res) => {
    try {
      const post = await postModel.find().populate("user_id");
      if (!post) {
        res
          .status(404)
          .json({ message: "Post not returned", error: error.message });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: "Error occured in getting a post" });
    }
  },
  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postModel.findById(id).populate("user_id");
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Error occured in getting a post" });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, description } = req.body;
      const updatedPost = await postModel.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true }
      );
      if (!updatedPost) {
        res.status(404).json({ message: "Post not updated" });
      }
      res.status(200).json(updatedPost);
    } catch {
      res
        .status(500)
        .json({ message: " Error occured in updation", error: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const deletedPost = await postModel.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        res
          .status(404)
          .json({ message: "Post not deleted", error: error.message });
      }
      res.status(200).json(deletedPost);
    } catch {
      res.status(500).json({
        message: "Error occured in deleting your post.",
        error: error.message,
      });
    }
  },
};

export default postController;
