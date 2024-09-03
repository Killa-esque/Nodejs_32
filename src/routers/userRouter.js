import { createUser, getUser } from '../controllers/userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.get("user/get-user", getUser)
userRouter.post("user/create-user", createUser)


export default userRouter;
