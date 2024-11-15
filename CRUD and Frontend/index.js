const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./dbconnection/db");
const routes = require("./routes/user-routing");
const PORT = 8000;

const app = express();

//dbconnection
dbConnection();

//middleware to use json
app.use(express.json());


//routing
app.use("/api/users", routes);


//server starting
app.listen(PORT, () => {
  console.log(`Server started successfuly on port ${PORT}`);
});
