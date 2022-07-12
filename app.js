const express = require("express");
const nodemon = require("nodemon");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello we are about to be on Azure!!!!");
});

app.listen(3000, () => {
  console.log("App is running");
});
