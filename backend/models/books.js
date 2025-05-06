const mongoose = require("mongoose");
const books = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  });
  
  module.exports = mongoose.model("Books", books);
  







module.exports = mongoose.model("books", books);
