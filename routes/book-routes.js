const express = require("express");

const {
  getAllBook,
  getSingleBook,
  modifyBook,
  deleteBook,
  putBook,
} = require("../controllers/book-controller");

const routes = express.Router();

//all routes related to book

routes.get("/allbooks", getAllBook);
routes.get("/singlebook/:id", getSingleBook);
routes.put("/modify/:id", modifyBook);
routes.delete("/delete/:id", deleteBook);
routes.post("/insert", putBook);

module.exports = routes;
