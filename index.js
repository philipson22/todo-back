var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/backend-todo",
  { useNewUrlParser: true }
);
const Task = mongoose.model("tasks", {
  title: String,
  etat: Boolean
});

app.get("/", function(req, res) {
  Task.find().exec(function(err, tasks) {
    if (!err) {
      console.log("error");
    }
  });

  res.send("hi papa");
});

app.post("/create", function(req, res) {
  console.log(req.body);

  res.send("ok");
});

app.post("/update", function(req, res) {
  res.send("Okay man update it");
});

app.post("/delete", function(req, res) {
  res.send("Okay man delete it");
});

app.listen(3000, function() {
  console.log("Server has started");
});
