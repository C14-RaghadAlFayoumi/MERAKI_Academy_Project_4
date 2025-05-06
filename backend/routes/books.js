const express = require("express");

// Import roles controller
const {creatBook,getBookById ,getAllBooks,getBookByAuthor} = require("../controllers/books");
const {createNewComment}= require("../controllers/comments")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const books = require("../models/books");


const booksRouter = express.Router();

booksRouter.get("/all",authentication,getAllBooks);
booksRouter.get("/search_1/:id", getBookById);
booksRouter.get("/search_2", getBookByAuthor);
booksRouter.post("/" ,creatBook);
booksRouter.post(
    "/:id/comments",
    authentication,
    authorization("create comments"),
    createNewComment
  );

module.exports = booksRouter