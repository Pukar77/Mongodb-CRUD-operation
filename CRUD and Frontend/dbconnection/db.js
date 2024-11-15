const express = require("express");
const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://pukarrimal11:pukarrimal12@cluster0.rbszi.mongodb.net/userdatabase",
          
        );
        console.log("Database connection successful");
      } catch (e) {
        console.log("Error connecting to database:", e);
      }
};

module.exports = dbConnection;
