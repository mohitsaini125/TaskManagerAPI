import Task from "../models/task.model.js";

export const createTask = async (req, res)=>{
    const body = req.body;
    try {
        if(body.task && body.description) {
            await Task.create(body);
            return res.json({
                success : true,
                message : "task created successfully"
            })
        } else {
            res.json({
                success : true,
                message : "invalid task details"
            })
        }
    } catch(err) {
        res.json({
            success : false,
            message : err.message || "something went wrong"
        })
    }
}

export const getAllTask = async (req, res)=>{
    try {
        const tasks = await Task.find();
        return res.json({
            success : true,
            data : tasks,
            message : "tasks fetched successfully"
        })
    } catch(err) {
        res.json({
            success : false,
            message : err.message || "something went wrong"
        })
    }
}

export const getByPage = async (req, res)=>{
    const page = req.params.page;
    try {
        const limitValue = 2;
        const tasks = await Task
        .find()
        .limit(limitValue)
        .skip(limitValue*(page-1))
        return res.json ({
            success : true,
            data : tasks,
            message : "brought the tasks of the given page"
        })
    } catch (err) {
        res.json({
            success : false,
            message : err.message || "something went wrong"
        })
    }
}

export const getById = async (req, res)=>{
    const id = req.params.id;
    try{
        const task = await Task.findById(id);
        return res.json({
            success : true,
            data : task,
            message : "message found of the given id"
        })
    } catch(err) {
        res.json({
            success : false,
            message : err.message || "something went wrong"
        })
    }
}

export const updateTask = async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const task = await Task.findById(id);
        if(task) {
            await task.updateOne(body);
            return res.json({
                success : true,
                message : "task updated successfully"
            })
        } else {
            return res.json({
                success : false,
                message : "task does not exit with this id"
            })
        }
    } catch(err) {
        res.json({
            success : false,
            message : err.message || "something went wrong"
        })
    }
}

export const deleteTask = async (req, res)=>{
    const id = req.params.id;
    try {
       const task = await Task.findById(id);
       if(task) {
        await task.deleteOne();
        return res.json({
            success : true,
            message : "task deleted successfully"
        })
       } else {
        return res.json({
            success : false,
            message : "task doesn't exist with this id"
        })
       }
    } catch(err) {
        res.json({
            success : false,
            message : err.message || "something went wrong"
        })
    }
}