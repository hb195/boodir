var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Express Server Online");
});

app.listen(3000, (req, res) => {
  console.log("Server running on port " + 3000);
});
