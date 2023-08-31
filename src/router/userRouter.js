import express from 'express';
import userController from '../contoller/userC.js';

const UserRouter = express.Router();

UserRouter.post('/create', userController.createUser);
UserRouter.get('/:userId', userController.getUserById);
UserRouter.put('/:userId', userController.updateUser);
UserRouter.delete('/:userId', userController.deleteUser);

export default UserRouter;