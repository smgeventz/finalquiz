const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/smggtestnew");

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

connection.on("error", (err) => {
  console.log("Mongo Db Connection Failed");
});

module.exports = connection;
