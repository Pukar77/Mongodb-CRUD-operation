const express = require("express");
const {
  getUser,
  insertUser,
  singleUser,
  deleteUser,
  modifyUser,
} = require("../controller/user-controller");

const routes = express.Router();

routes.post("/insert", insertUser);
routes.get("/userdetail", getUser);
routes.get("/singleuser", singleUser);
routes.delete("/delete/:id", deleteUser);
routes.patch("/modify/:id", modifyUser);

module.exports = routes;
