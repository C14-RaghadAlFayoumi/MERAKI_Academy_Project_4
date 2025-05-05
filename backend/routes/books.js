const express = require("express");

// Import roles controller
const {creatBook,getAllBooks} = require("../controllers/books");
const {createNewComment}= require("../controllers/comments")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const books = require("../models/books");


const booksRouter = express.Router();

booksRouter.get("/all",authentication,getAllBooks);
booksRouter.post("/" ,creatBook);
//booksRouter.post()
module.exports = booksRouter