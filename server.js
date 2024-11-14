require("dotenv").config();
const express = require("express");
const dbConnection = require("./database/db");
const routes = require("./routes/book-routes");

const app = express();
const PORT = process.env.PORT;

// database connection
dbConnection();

//middleware to use json
app.use(express.json());

//routing

app.use("/api/books", routes);

//running server
app.listen(PORT, () => {
  console.log(`Server runned successfully on port ${PORT}`);
});
