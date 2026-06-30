import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["pending", "completed"],
        default : "pending",
        required : true
    }
})

const Task = mongoose.model("Task", taskSchema);

export default Task;