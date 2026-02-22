const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.static("public"));
app.use(express.static("photos"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/../views/lock.html");
});

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/../views/welcome.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/../views/gallery.html");
});

app.get("/story", (req, res) => {
    res.sendFile(__dirname + "/../views/story.html");
});

app.get("/eye", (req, res) => {
    res.sendFile(__dirname + "/../views/eye.html");
});

app.get("/reasons", (req, res) => {
    res.sendFile(__dirname + "/../views/reasons.html");
});

app.get("/masti", (req, res) => {
    res.sendFile(__dirname + "/../views/masti.html");
});

app.get("/final", (req, res) => {
    res.sendFile(__dirname + "/../views/final.html");
});

module.exports = app;
module.exports.handler = serverless(app);
