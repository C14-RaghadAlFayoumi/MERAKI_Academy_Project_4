const booksModel = require("../models/books");
const creatBook = (req,res)=>{
const { title,description,author,comments}=req.body;
console.log(title,description,author);

const newBook = new booksModel({
    title,description,author,comments
  });
  newBook
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `creat book`,
       
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};


const getAllBooks = (req, res) => {
    const userId = req.token.userId;
    booksModel
      .find()
      .exec()
      .then((books) => {
        if (books.length) {
          res.status(200).json({
            success: true,
            message: `All the books`,
            userId: userId,
            
          });
        } else {
          res.status(404).json({
            success: false,
            message: `No books Yet`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  };
const getBookByAuthor = (req, res) => { 
let authorId = req.query.author;

articlesModel
  .find({ author: authorId })
  .then((articles) => {
    if (!articles.length) {
      return res.status(404).json({
        success: false,
        message: `The author: ${authorId} has no articles`,
      });
    }
    res.status(200).json({
      success: true,
      message: `All the articles for the author: ${authorId}`,
      articles: articles,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  });
};









  
  
module.exports = {
    creatBook,getAllBooks,getBookByAuthor,
  };
