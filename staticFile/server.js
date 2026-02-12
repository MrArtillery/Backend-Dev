import express from "express";
import fs from "fs";

const port = 3000;
const app = express();
app.set("view engine","ejs");
app.use("/static",express.static('public'));

app.get("/",(req,res)=>{
    res.send("home");
})

app.get("/index",(req,res)=>{
    const files = fs.readdirSync("./public");

    const limit = 10;
    const page = parseInt(req.query.page) || 1;

    const start = (page - 1) * limit;
    const end = page * limit;

    const paginatedImages = files.slice(start, end);

    const totalPages = Math.ceil(files.length / limit);
    
    res.render("index", {
        images: paginatedImages,
        currentPage: page,
        totalPages
    });
})

app.listen(port,()=>{
    console.log("The server is running "+port);
})