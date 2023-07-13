const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/UserModel.js");
const port = 5000;

const app = express();

//connect to db
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
    app.listen(port, (err, res) => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.post("/post", (req, res) => {
  
    User.create({
        Username: "Goatmbithi",
        name: "Mbithi Emmanuel",
        age: 21,
      })
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    console.log(err);
  });
});


app.get("/", (req, res) => {
    User.find()
    .then((user)=>{
        res.status(200).json(user);
    })
    .catch((err) => {
        console.log(err);
    })
});
