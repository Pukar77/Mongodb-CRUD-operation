const mongoose = require("mongoose");

const Bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title must be included"],
    max: [100, "Title must not exceed more than 100 words"],
    trim: true,
  },

  author: {
    type: String,
    // required: [true, "Book Author must be included"],
    max: [300, "Title must not exceed more than 300 words"],
    trim: true,
  },

  year: {
    type: Number,
    // required: [true, "Publication date of Book  must be included"],
    trim: true,
    max: [new Date().getFullYear(), "Date cannot be of future"],
  },

  createdate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Book", Bookschema);
