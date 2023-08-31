import express from 'express';
import postController from '../contoller/postC.js';

const postRouter = express.Router();

postRouter.get('/:postId', postController.getPostById);
postRouter.post('/create', postController.createPost);
postRouter.put('/:postId', postController.updatePost);
postRouter.delete('/:postId', postController.deletePost);

export default postRouter;