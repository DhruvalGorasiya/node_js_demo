const mongoDB = "mongodb://127.0.0.1:27017/userDatabase";
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = mongoose.connect(mongoDB, (error) => {
  if (error) {
    console.log("mongoDB connection error" + error);
  } else {
    console.log("mongodb Connected");
  }
});

module.exports = connectDB;
