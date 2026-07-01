import express from "express"
import mongoose from "mongoose"
import taskRouter from "./routes/task.router.js";

const dbURL = "enter your mongoDB connection string here"

const server = express();

server.use(express.json());
server.use(taskRouter)

mongoose.connect(dbURL).then(()=>{
    server.listen(3000, ()=>{
        console.log("server running at port 3000")
    })
})