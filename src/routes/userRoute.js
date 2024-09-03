const express = require('express');
const userRouter = express.Router();

const { getUser, createUser, userLogin, signUp } = require('../controllers/userController');

// tạo API 
userRouter.get("/get-user", getUser);

userRouter.post("/create-user", createUser);

// API login
userRouter.post("/login", userLogin); // Read find

// API signup
userRouter.post("/signup", signUp); // => create

module.exports = userRouter;