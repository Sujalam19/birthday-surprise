const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../photos")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/lock.html"));
});

app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/welcome.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/gallery.html"));
});

app.get("/story", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/story.html"));
});

app.get("/eye", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/eye.html"));
});

app.get("/reasons", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/reasons.html"));
});

app.get("/masti", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/masti.html"));
});

app.get("/final", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/final.html"));
});

module.exports = app;
module.exports.handler = serverless(app);
