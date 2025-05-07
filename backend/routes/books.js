const express = require("express");

// Import roles controller
const {creatBook,getBookById ,getAllBooks,getBookByAuthor ,getBookByAuthorId , updateBookById,
    deleteBookByAuthor,
} = require("../controllers/books");
const {createNewComment}= require("../controllers/comments")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const books = require("../models/books");


const booksRouter = express.Router();

booksRouter.get("/all",authentication,getAllBooks);
booksRouter.get("/search_1/:id", getBookById);
booksRouter.get("/search_2/:author", getBookByAuthor);
booksRouter.get("/search_3/:id",getBookByAuthorId)
booksRouter.post("/" ,authentication,creatBook);
//authorization("CREATE_books")
booksRouter.post(
    "/:id/comments",
    authentication,
    authorization("create comments"),
    createNewComment
  );
booksRouter.put("/:id",updateBookById) ;
booksRouter.delete("/:id/author",deleteBookByAuthor) 

module.exports = booksRouter