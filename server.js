const express = require("express");

const app = express();

app.listen(3000, function () {
  console.log("The server is starting at 3000");
});

app.get("/", function (request, response) {
  response.send("<h1> Hello</h1>");
  console.log("the method get has been calledd");
});

app.get("/about", function (req, res) {
  res.send("My name is Johan Chacon");
  console.log("About page load");
});

app.get("/contact", function (req, res) {
  res.send("<h2>THis is the new h2</h2>");
  console.log("The contact Page has been called");
});

app.get("/new", function (req, res) {
  res.send("THis is the new page");
});
