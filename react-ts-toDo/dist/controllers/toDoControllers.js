"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntireTask = exports.getTasks = exports.removeTask = exports.addTask = exports.createTask = void 0;
const toDoSchema_1 = require("../models/toDoSchema");
const createTask = async (req, res) => {
    try {
        const task = await toDoSchema_1.toDoSchema.create(req.body);
        return res.status(200).json({ success: true, task });
    }
    catch (error) {
        return res.status(500).json({ success: false, error });
    }
};
exports.createTask = createTask;
const addTask = async (req, res) => {
    try {
        const { task, tasksId } = req.body;
        let tasks = await toDoSchema_1.toDoSchema.findById(tasksId);
        if (!tasks) {
            tasks = await toDoSchema_1.toDoSchema.create({ _id: tasksId, toDoArr: [task] });
            return res.status(200).json({ success: true, msg: "New Task list created", tasks });
        }
        tasks.toDoArr.push(task);
        await tasks.save();
        return res.status(200).json({ success: true, tasks });
    }
    catch (error) {
        return res.status(500).json({ success: false, error });
    }
};
exports.addTask = addTask;
const removeTask = async (req, res) => {
    try {
        const { task, tasksId } = req.body;
        const tasks = await toDoSchema_1.toDoSchema.findByIdAndUpdate(tasksId, { $pull: { toDoArr: task } }, { new: true });
        if (!tasks) {
            return res.status(404).json({ success: false, msg: "Task list not found" });
        }
        return res.status(200).json({ success: true, tasks });
    }
    catch (error) {
        return res.status(500).json({ success: false, error });
    }
};
exports.removeTask = removeTask;
const getTasks = async (req, res) => {
    try {
        const { tasksId } = req.body;
        const tasks = await toDoSchema_1.toDoSchema.findById(tasksId);
        if (!tasks) {
            return res.status(404).json({ success: false, tasks: [] });
        }
        return res.status(200).json({ success: true, tasks: tasks.toDoArr });
    }
    catch (error) {
        return res.status(500).json({ success: false, error });
    }
};
exports.getTasks = getTasks;
const deleteEntireTask = async (req, res) => {
    try {
        const { tasksId } = req.body;
        const task = await toDoSchema_1.toDoSchema.findByIdAndDelete(tasksId);
        if (!task) {
            return res.status(404).json({ success: false, msg: "No task Found" });
        }
        return res.status(200).json({ success: true, msg: "Deleted Successfully" });
    }
    catch (error) {
        return res.status(500).json({ success: false, error });
    }
};
exports.deleteEntireTask = deleteEntireTask;
