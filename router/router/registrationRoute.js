import express from "express";

const router = express.Router();

router.get("/login",(req,res)=>{
    res.send("login here")
})

router.get("/signup",(req,res)=>{
    res.send("signup here")
})

export default router;