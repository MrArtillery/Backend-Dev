import express from "express"

const router = express.Router();

router.get("/profile",(req,res)=>{
    res.send("profile page")
})

router.get("/report",(req,res)=>{
    res.send("this is the report")
})

export default router;