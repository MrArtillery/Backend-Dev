const express = require("express")
const app = express()
const { user } =  require("./user")

app.get("/user/:id/profile",(req,res)=>{
    const id = parseInt(req.params.id)
    const tab = req.query.tab;
    const lang =  req.query.lang;

    if(tab == "Setting"){
        res.json({message: `Language is ${lang}`})
    }
    else if(tab == "posts"){
        res.json({message: `Language is ${tab}`})
    }
    else if(tab == "info"){
        res.json({message: `Language is ${id}`})
    }
    else{
        res.json({message:"invalid"})
    }
})


app.listen(3000,()=>{
    console.log("server is listening")
})