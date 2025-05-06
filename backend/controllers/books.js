const booksModel = require("../models/books");

const creatBook = (req,res)=>{
const { title,description,comments}=req.body;
const author = req.token.userId;
const newBook = new booksModel({
    title,description,author,comments
  });
  newBook
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `creat book`,
        author:author
       
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
  //.UserId;
    booksModel
      .find()
      .populate("comments")
      .exec()
      .then((books) => {
        if (books.length) {
          res.status(200).json({
            success: true,
            message: `get All the books`,
           // userId:token
           userId: userId,
           books: books,
            
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
  const getBookById = (req, res) => {
    let id = req.params.id;
    booksModel
      .findById(id)
      .populate("author", "firstName -_id")
      .exec()
      .then((books) => {
        if (!books) {
          return res.status(404).json({
            success: false,
            message: `The book with id => ${id} not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `The book ${id} `,
          books:books
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
    }

const getBookByAuthor = (req, res) => { 
  //console.log( req.params.author);
  
let authorId = req.params.author;

booksModel
  // .find({ author: authorId })
  .find().populate({
    path: 'author',
    match: {firstName: req.params.author }
  })
  .then((books) => {
    // console.log(books)
    const filtered = books.filter(book=> book.author!== null &&book.author.firstName ===req.params.author)
    //console.log(filtered)
    if (!books.length) {
      return res.status(404).json({
        success: false,
        message: `The author: ${authorId} has no books`,
      });
    }
    res.status(200).json({
      success: true,
      message: `All the articles for the author: ${authorId}`,
      books:books
    
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
const getBookByAuthorId = (req, res) => {
  let id = req.params.id;
  booksModel
    .findById(id)
    .populate("author", "firstName -_id")
    .exec()
    .then((books) => {
      if (!books) {
        return res.status(404).json({
          success: false,
          message: `The books with id => ${id} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The books ${id} `,
        books:books
        
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
const updateBookById = (req, res) => {
  const id = req.params.id;
  const filter = req.body;
  Object.keys(filter).forEach((key) => {
    filter[key] == "" && delete filter[key];
  });
  booksModel
    .findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((newBook) => {
      if (!newBook) {
        return res.status(404).json({
          success: false,
          message: `The article with id => ${id} not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Article updated`,
        books: newBook,
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
const deleteBookByAuthor = (req, res) => {
  const author = req.params.id;
  booksModel
    .deleteMany({ author })
    .then((result) => {
      if (!result.deletedCount) {
        return res.status(404).json({
          success: false,
          message: `The Author not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Deleted book for the author: ${author}`,
        result,
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
    creatBook,getAllBooks,getBookById,getBookByAuthor,getBookByAuthorId,updateBookById,
    deleteBookByAuthor
  };
