const express = require('express');
const path = require('path');
const app = express();
const upload = require('./multer-setup.js');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload",upload.single("image"),(req,res)=>{
res.send("File uploaded successfully");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});