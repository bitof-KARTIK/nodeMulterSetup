const express = require('express');
const path = require('path');
const app = express();
const upload = require('./multer-setup.js');
const userModel = require('./models/userModel');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload", upload.single("image"), async(req, res) => {
    let image= await userModel.create({
        name:"Another bag",
        image:req.file.buffer
    })
    res.send("Image uploaded successfully");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});