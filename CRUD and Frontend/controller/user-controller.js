const express = require("express");
const detailUser = require("../model/userform");

const getUser = async (req, res) => {
  
  const get = await detailUser.find({});

  console.log(get);
  return res.json({ get });
};

const insertUser = async (req, res) => {
  const users = req.body;
  const insert = detailUser.create(users);
  if (insert) {
    return res.status(201).json({ message: "SUccessful insert", user: users });
  }
  console.log(users);

  //   return res.json({ users });
};

const singleUser = async (req, res) => {
  const id = req.params.id;
  const find = detailUser.findById(id);
  console.log(find);

  // return res.json({ message: find });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const find = await detailUser.findByIdAndDelete(id);
  console.log("Item deleetd");

  if (find) {
    return res.json({ status: "Item deleted" });
  }
};

const modifyUser = async (req, res) => {
  const id = req.params.id;
  const modified = req.body;
  const find = detailUser.findByIdAndUpdate(id, modified, { new: true });
  console.log(find);
  return res.json({ find });
};

module.exports = { getUser, insertUser, singleUser, deleteUser, modifyUser };
