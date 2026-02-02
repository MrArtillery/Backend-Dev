import express from "express";
import userRouter from "./router/userRoute.js"
import registrationRouter from "./router/registrationRoute.js"

const port = 3000;

const app = express();

app.use("/api",userRouter)
app.use("/api",registrationRouter)

app.listen(port,()=>{
    console.log("server is running on port "+port)
})
