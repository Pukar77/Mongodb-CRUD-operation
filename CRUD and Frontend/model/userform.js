const express = require("express");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be entered"],
  },

  age: {
    type: Number,
    required: [true, "Age  must be mentioned"],
  },
  email: {
    type: String,
    required: [true, "Email must be entered"],
  },
});

module.exports = mongoose.model("detailUser", userSchema);
