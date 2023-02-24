const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "hshkjdhjgh$#(*&(*&%(#*&(*&%sdsdkjhhfgdjhg";
app.post("/login", async (req, res) => {
  const { userName, email, password } = req.body;

  const user = await UserModel.findOne({ email }).lean();
  if (bcrypt.compare(password, user.password)) {
    token = jwt.sign(
      { id: user._id, userName: user.userName, email: user.email },
      JWT_SECRET
    );
    res.status(200).json({
      success: false,
      message: "User Login Successfully",
      token: token,
    });
  } else {
    res.status(200).json({
      success: false,
      message: "Email OR Password is Invalid",
      data: user,
    });
  }
});

app.post("/register", async (req, res) => {
  const password = bcrypt.hashSync(req.body.password, 10);
  const userName = req.body.userName;
  const email = req.body.email;
  console.log(req.body);
  if (!userName) {
    res.status(200).json({
      success: false,
      data: "userName is Required",
    });
  } else if (!email) {
    res.status(200).json({
      success: false,
      data: "email is Required",
    });
  } else if (!password) {
    res.status(200).json({
      success: false,
      data: "password is Required",
    });
  } else {
    try {
      const responce = await UserModel.create({
        userName,
        email,
        password,
      });
      res.status(200).json({
        success: true,
        data: responce,
      });
    } catch (error) {
      if (error.code === 11000) {
        console.log(error);
        res.status(200).json({
          success: false,
          massage: "duplicate userName",
          error: error,
        });
      } else {
        json.status(500).json({ success: false, error: error });
      }
    }
  }
});

module.exports = app;
