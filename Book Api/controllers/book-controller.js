const express = require("express");
const book = require("../models/book");

const putBook = async (req, res) => {
  const bookItem = req.body;
  const insertBook = await book.create(bookItem);

  if (insertBook) {
    res.status(201).json({
      success: true,
      message: "Book inserted successfully",
    });
  }
};

const getAllBook = async (req, res) => {
  try {
    const bookdetail = await book.find({});
    console.log(bookdetail);
    // return res.json({ bookdetail });  always use return statement to disply in postman
  } catch (e) {
    console.log("Error", e);
  }
};

const getSingleBook = async (req, res) => {
  const id = req.params.id;
  const findbyid = await book.findById(id);
  console.log(findbyid);

  return res.json({ findbyid });
};

const modifyBook = async (req, res) => {
  const id = req.params.id;
  const modifiedmessage = req.body;
  const findbyid = await book.findByIdAndUpdate(id, modifiedmessage, {
    new: true,
  });
  console.log(findbyid);

  return res.json({ findbyid });
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  const deleteitem = await book.findByIdAndDelete(id);
  if (deleteitem) {
    console.log("Item deleted");
    return res.json({ message: "Successfull" });
  }
};

module.exports = { getAllBook, getSingleBook, modifyBook, deleteBook, putBook };
