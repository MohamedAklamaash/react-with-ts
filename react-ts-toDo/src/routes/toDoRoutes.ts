import express,{ Router } from "express";
import { addTask, createTask, deleteEntireTask, getTasks, removeTask } from "../controllers/toDoControllers";

const router:Router = express.Router();

router.route("/createTodo").post(createTask);
router.route("/addToDo").post(addTask);
router.route("/removeToDo").put(removeTask);
router.route("/getAllTasks").get(getTasks);
router.route("/deleteAllTasks").delete(deleteEntireTask);

export default router;