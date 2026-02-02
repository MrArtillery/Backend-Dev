import express from "express";
import { logfun,userValidation,tokenValidation } from "./middleware.js"
import { config } from "dotenv";

const app = express();
config();

let port = process.env.PORT || 3000;

app.use(express.json());

app.use(logfun) //global middleware

let data = [
    { id: 1, username: "ramesh", password: "1234" },
    { id: 2, username: "asdfg", password: "4567" }
];

app.get("/", (req, res) => {
    res.status(200).json({ message: "Home" });
});

app.get("/data", (req, res) => {
    res.status(200).json({
        message: "all data",
        data
    });
});

app.post("/data",userValidation, (req, res) => {
    
    let newuser = {
        id: data.length + 1,
        ...req.body
    };

    data.push(newuser);

    res.status(200).json({
        message: "data created",
    });
});

app.put("/data/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    let {username} = req.body;

    let userIdx = data.findIndex((ele) => ele.id == id);

    if(userIdx == -1){
        res.status(400).json({
        message: "usernot found",
    });
    }

    let updatedUser = {...data[userIdx],username: username};
    data[userIdx] = updatedUser;

    res.status(200).json({
        message: "user updated",
    });
});

app.delete("/data/:id",(req,res)=>{
    let id = parseInt(req.params.id)

    const userIndex = data.findIndex((ele) => ele.id === id);
    const userDel = data[userIndex];
    
    if(userIndex == -1){
        return res.status(400).json({
            message : "user not found"
        })
    }

    
    data = data.filter((user) => user.id !== id);

    res.status(200).json({
        message: "User Deleted",
        user: userDel
    })
})

app.get("/data/auth",tokenValidation,(req,res)=>{
    res.status(200).json({
        message: "token valid"
    });
})

app.listen(port, () => {
    console.log("Server is running");
});