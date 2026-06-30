import express from "express";

import { createTask, deleteTask, getAllTask, getById, getByPage, updateTask } from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/tasks", createTask)

taskRouter.get("/tasks", getAllTask)

taskRouter.get("/tasks/:page", getByPage)

taskRouter.get("/task/:id", getById)

taskRouter.patch("/task/:id", updateTask)

taskRouter.delete("/task/:id", deleteTask)

export default taskRouter;