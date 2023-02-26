const mongoDB = "mongodb+srv://DhruvalGorasiya:Dhruval9535@cluster0.r5mwsou.mongodb.net/test";
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
