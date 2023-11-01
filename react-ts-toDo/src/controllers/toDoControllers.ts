import { toDoSchema } from "../models/toDoSchema";
import { Request, Response } from "express";

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await toDoSchema.create(req.body);
        return res.status(200).json({ success: true, task });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}

export const addTask = async (req: Request, res: Response) => {
    try {
        const { task, tasksId } = req.body;
        let tasks = await toDoSchema.findById(tasksId);

        if (!tasks) {
            tasks = await toDoSchema.create({ _id: tasksId, toDoArr: [task] });
            return res.status(200).json({ success: true, msg: "New Task list created", tasks });
        }

        tasks.toDoArr.push(task);
        await tasks.save();
        return res.status(200).json({ success: true, tasks });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}

export const removeTask = async (req: Request, res: Response) => {
    try {
        const { task, tasksId } = req.body;
        const tasks = await toDoSchema.findByIdAndUpdate(tasksId, { $pull: { toDoArr: task } }, { new: true });

        if (!tasks) {
            return res.status(404).json({ success: false, msg: "Task list not found" });
        }

        return res.status(200).json({ success: true, tasks });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}

export const getTasks = async (req: Request, res: Response) => {
    try {
        const { tasksId } = req.body;
        const tasks = await toDoSchema.findById(tasksId);

        if (!tasks) {
            return res.status(404).json({ success: false, tasks: [] });
        }

        return res.status(200).json({ success: true, tasks: tasks.toDoArr });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}

export const deleteEntireTask = async (req: Request, res: Response) => {
    try {
        const { tasksId } = req.body;
        const task = await toDoSchema.findByIdAndDelete(tasksId);

        if (!task) {
            return res.status(404).json({ success: false, msg: "No task Found" });
        }

        return res.status(200).json({ success: true, msg: "Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}
