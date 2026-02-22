const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static("photos"));   

const PASSWORD = "1619"; // CHANGE THIS

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/lock.html");
});

app.post("/unlock", (req, res) => {
    const userPass = req.body.password;

    if (userPass === PASSWORD) {
        res.redirect("/welcome");
    } else {
        res.send("<h2 style='text-align:center;color:red'>Wrong Password 😢</h2><a href='/'>Try Again</a>");
    }
});

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/views/welcome.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/story", (req, res) => {
    res.sendFile(__dirname + "/views/story.html");
});

app.get("/reasons", (req, res) => {
    res.sendFile(__dirname + "/views/reasons.html");
});

app.get("/final", (req, res) => {
    res.sendFile(__dirname + "/views/final.html");
});

app.get("/masti", (req, res) => {
    res.sendFile(__dirname + "/views/masti.html");
});

app.get("/eye", (req,res)=>{
res.sendFile(__dirname+"/views/eye.html");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
