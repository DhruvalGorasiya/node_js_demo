const express = require("express");
const app = express();
const User = require("./api/user");
require("./configs/db_connect");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.set("view engine", "hbs");

app.use("/view",);

app.use("/user", User);

app.listen(3000, (error) => {
  if (error) {
    console.log(`${error}  some error is found`);
  } else {
    console.log("server connected with port 3000");
  }
});
