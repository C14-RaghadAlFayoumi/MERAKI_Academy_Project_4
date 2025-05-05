const express = require("express");

// Import roles controller
const {register, login} = require("../controllers/User");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login",login)

module.exports = userRouter